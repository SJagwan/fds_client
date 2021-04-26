import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemThunk } from "../../redux/item/addItem/addItemAction";
import DisplayItemDetail from "./DisplayItemDetail";
import { viewAllCategoryThunk } from "../../redux/category/viewAllCategory/viewAllCategoryAction";
import { viewAllRestaurantThunk } from "../../redux/restaurant/viewAllRestaurant/viewAllRestaurantAction";

const AddItem = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      item: state.addItem.item,
      restaurantList:state.viewAllRestaurant.restaurants,
      categoryList: state.viewAllCategory.categories,
      error: state.addItem.error,
    };
  });

  const [state, setState] = useState({
    itemName: "",
    cost: "",
    quantity: "",
    restaurantId: "",
    catId: "",
    validations: { itemName: undefined, cost: undefined },
  });
  const fetchAll=()=>
  {dispatch(viewAllRestaurantThunk())
    dispatch(viewAllCategoryThunk())
  }
  useEffect(fetchAll,[])
 

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let validationMsg;
    if (name === "itemName") {
      validationMsg = validateItemName(value);
    }
    if (name === "cost") {
      validationMsg = validateCost(value);
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value, validations: newValidations });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addItemThunk(state));
    if (state.validations.itemName) {
      return;
    }
  };
  const validateItemName = (name) => {
    if (name.length < 3) {
      return "Item Name can not be Smaller than 3 Letters";
    }
    return undefined;
  };
  const validateCost = (cost) => {
    if (cost < 0) {
      return "Cost can not be Negative";
    }
    return undefined;
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Add Item</h1>

        <div className="form-group">
          <label> Item Name</label>
          <input
            type="text"
            className="form-control"
            name="itemName"
            onChange={onHandleChange}
          />
          {state.validations.itemName ? (
            <div>{state.validations.itemName}</div>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label> Cost</label>
          <input
            type="number"
            name="cost"
            className="form-control"
            onChange={onHandleChange}
          />
          {state.validations.cost ? <div>{state.validations.cost}</div> : ""}
        </div>

        <div className="form-group">
          <label> Quantity</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            onChange={onHandleChange}
            min="0"
          />
        </div>

        <div className="form-group">
          <label> Resturant </label>
          <select
            name="restaurantId"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Restaurant
            </option>
            {response.restaurantList.map((restaurant) => (
              <option
                key={restaurant.restaurantId}
                value={restaurant.restaurantId}
              >
                {restaurant.restaurantName}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label> Category</label>
          <select
            name="catId"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Category 
            </option>
            {response.categoryList.map((category) => (
              <option key={category.catId} value={category.catId}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit
          </button>
        </div>
      </form>
      {response.item ? <DisplayItemDetail item={response.item} /> : ""}
      {response.error ? response.error : ""}
    </div>
  );
};

export default AddItem;

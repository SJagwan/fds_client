import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToRestaurantThunk } from "../../redux/item/addItemToRestaurant/addItemToRestaurantAction";
import DisplayItemDetail from "./DisplayItemDetail";

const AddItemToRestaurant = () => {
  const dispatch=useDispatch();
  const response = useSelector((state)=>{
    return{
      restaurant:state.addItemByRestaurant.restaurant,
     error:state.addItemByRestaurant.error
    }
  })
  const [state, setState] = useState({
    itemId: "",
    restaurantId: "",
  });
  
  const restaurantList = [
    { restaurantId: "9015238800", restaurantName: "PIZZAHUT" },
    { restaurantId: 2, restaurantName: "Dominos" },
    { restaurantId: 3, restaurantName: "BurgerKing" },
  ];
  const itemList = [
    { itemId:"6458641963", itemName: "Cake" },
    { itemId: "1199438616", itemName: "Pizza" },
    { itemId: 3, itemName: "Nodlles" },
  ];

 // const response = { item: undefined, error: "" };
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addItemToRestaurantThunk(state))
   // setState({ ...state });
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Add Item To Restaurant</h1>
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
            {restaurantList.map((restaurant) => (
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
          <label> Item </label>
          <select
            name="itemId"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Item 
            </option>
            {itemList.map((item) => (
              <option key={item.itemId} value={item.itemId}>
                {item.itemName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* {response.item ? <DisplayItemDetail item={response.item} /> : ""}
      {response.error ? response.error : ""} */}
    {response.restaurant ? <p>Item Added Successfully in Restaurant = {response.restaurant.restaurantName}</p>: ""}
      {response.error ? response.error : ""}
    </div>
  );
};

export default AddItemToRestaurant;

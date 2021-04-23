import { useState } from "react";
import DisplayItemDetail from "./DisplayItemDetail";

const AddItem = () => {
  const [state, setState] = useState({
    itemName: "",
    cost: "",
    quantity: "",
    restaurantId: "",
    catId: "",
    validations: { itemName: undefined ,cost:undefined},
  });
 
  const itemmock = {
    itemName: "Cake",
    cost: "100",
    quantity: "2",
    restaurantId: "Dominos",
    catId: "Bakery",
  };
   const response = { item: undefined, error: "" };
   const restaurantList = [
    { restaurantId: 1, restaurantName: "PIZZAHUT" },
    { restaurantId: 2, restaurantName: "Dominos" },
    { restaurantId: 3, restaurantName: "BurgerKing" },
  ];
  const categoryList = [
    { catId: 1, name: "" },
    { catId: 2, name: "Hardik" },
    { catId: 3, name: "Food" },
  ];

  const onHandleChange = (event) => { 
    const name = event.target.name;
    const value = event.target.value;
    let validationMsg
    if(name==="itemName"){
      validationMsg=validateItemName(value)
    }
    if (name==="cost"){
      validationMsg=validateCost(value)
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value , validations: newValidations});
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (state.validations.itemName ) {
      return;
    }
    setState({ ...state });
  };
  const validateItemName =(name)=>{
    if (name.length<3){
    return "Item Name can not be Smaller than 3 Letters"
  }
return undefined;
}
const validateCost =(cost)=>{
  if(cost<0){
    return "Cost can not be Negative"
  }
  return undefined
}

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Add Item</h1>

        <div className="form-group" >
          <label> Item Name</label>
          <input type="text" className="form-control" name="itemName" onChange={onHandleChange} />
          {state.validations.itemName ? (
            <div>
              {state.validations.itemName}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
        <label> Cost</label>
        <input type="number" name="cost"  className="form-control" onChange={onHandleChange} />
        {state.validations.cost ? (
            <div>
              {state.validations.cost}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
        <label> Quantity</label>
        <input type="number" className="form-control" name="quantity" onChange={onHandleChange} min="0"/>
        </div>
        
        <div className="form-group">
        <label> Resturant Id</label>
        <select name="restaurantId"  className="form-control" onChange={onHandleChange}>
          <option disabled selected>
            Select Restaurant 
          </option>
          {restaurantList.map((restaurant) => (
            <option key={restaurant.restaurantId} value={restaurant.restaurantId}>
              {restaurant.restaurantName}
            </option>
          ))}
        </select>
        </div>

        <div className="form-group">
        <label> Cat Id</label>
        <select name="catId"  className="form-control" onChange={onHandleChange}>
          <option disabled selected>
            Select Category Id
          </option>
          {categoryList.map((category) => (
            <option key={category.catId} value={category.catId}>
              {category.name}
            </option>
          ))}
        </select>
        </div>

        <div className="form-group" >
        <button className="form-control"> Submit</button>
        </div>
      </form>
      {response.item ? <DisplayItemDetail item={response.item} /> : ""}
      {response.error ? response.error : ""}
    </div>
  );
};

export default AddItem;

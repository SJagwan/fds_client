import { useState } from "react";
import DisplayItemDetail from "./DisplayItemDetail";

const AddItemToRestaurant = () => {
  const [state, setState] = useState({
    itemId: "",
    restaurantId: "",
  });
  const restaurantList = [
    { restaurantId: 1, restaurantName: "PIZZAHUT" },
    { restaurantId: 2, restaurantName: "Dominos" },
    { restaurantId: 3, restaurantName: "BurgerKing" },
  ];
  const itemList = [
    { itemId: 1, itemName: "Cake" },
    { itemId: 2, itemName: "Pizza" },
    { itemId: 3, itemName: "Nodlles" },
  ];

  const itemmock = {
    itemName: "Cake",
    cost: "100",
    quantity: "2",
    restaurantId: "Dominos",
    catId: "Bakery",
  };
  const response = { item: undefined, error: "" };
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setState({ ...state });
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>Add Item To Restaurant</h1>
        <div className="form-group">
          <label> Resturant Id</label>
          <select
            name="restaurantId"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Restaurant Id
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
          <label> Item Id</label>
          <select
            name="itemId"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Item Id
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
      {response.item ? <DisplayItemDetail item={response.item} /> : ""}
      {response.error ? response.error : ""}
    </div>
  );
};

export default AddItemToRestaurant;

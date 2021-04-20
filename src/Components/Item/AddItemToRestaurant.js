import { useState } from "react";

const AddItemToRestaurant = () => {
  const [state, setState] = useState({
    itemId: "",
    restaurantId: "",
    item: undefined,
  });
  const itemmock = {
    itemName: "Cake",
    cost: "100",
    quantity: "2",
    restaurantId: "Dominos",
    catId: "Bakery",
  };
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setState({ ...state, item: itemmock });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <br />
        <h1>Add Item To Restaurant</h1>
        <br />
        <label> Item Id</label>
        <input type="text" name="itemId" onChange={onHandleChange} />
        <br />
        <br />
        <label> Restaurant Id</label>
        <input type="text" name="restaurantId" onChange={onHandleChange} />
        <br />
        <button>Submit</button>
      </form>
      Item Id - {state.itemId}
      <br />
      Restaurant Id - {state.restaurantId}
      {console.log(state.item)}
    </div>
  );
};

export default AddItemToRestaurant;

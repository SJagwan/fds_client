import { useState } from "react";

const ViewItem = () => {
  const [state, setState] = useState({ itemId: "", item: undefined });
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
      <br />
      <h1> View Item</h1>
      <br />
      <form onSubmit={onSubmit}>
        <br />
        <h1> View Item By Id</h1>
        <br />
        <label>Item Id</label>
        <input type="text" name="itemId" onChange={onHandleChange} />
        <br />
        <button>Submit</button>
      </form>
      Item Id - {state.itemId}
      <br />
      {console.log(state.item)}
    </div>
  );
};

export default ViewItem;
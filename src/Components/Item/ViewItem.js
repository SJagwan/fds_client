import { useState } from "react";
import DisplayItemDetail from "./DisplayItemDetail";

const ViewItem = () => {
  const [state, setState] = useState({ itemId: "" });

  const itemList = [
    { itemId: 1, itemName: "Cake" },
    { itemId: 2, itemName: "Pizza" },
    { itemId: 3, itemName: "Noodles" },
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
      <h1> View Item</h1>

      <form onSubmit={onSubmit}>
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

        <button>Submit</button>
      </form>
      {response.item ? <DisplayItemDetail item={response.item} /> : ""}
      {response.error ? response.error : ""}
    </div>
  );
};
export default ViewItem;

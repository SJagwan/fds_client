import { useState } from "react";
import DisplayCart from "./DisplayCart";

const IncreaseQuantity = () => {
  const itemList = [
    { itemId: 1, itemName: "cake" },
    { itemId: 2, itemName: "lays" },
    { itemId: 3, itemName: "drink" },
  ];
  const cart = {
    customerId: "1",
    firstName: "Shubhanshu",
    items: [
      {
        itemId: "9",
        itemName: "cake",
      },
      {
        itemId: "7",
        itemName: "coke",
      },
    ],
  };

  const [state, setState] = useState({ itemId: "", quantity: "" });

  const response = { cart: undefined, error: "" };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state });
  };

  return (
    <div className="container">
      <h2>IncreaseQuantity of Item</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Item Id</label>
          <select
            className="form-control"
            name="itemId"
            onChange={onHandleChange}
          >
            <option disabled selected>
              select Item
            </option>
            {itemList.map((item) => (
              <option key={item.itemId} value={item.itemId}>
                {item.itemName}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            className="form-control"
            onChange={onHandleChange}
            min="0"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {response.cart ? <DisplayCart cart={response.cart} /> : ""}
      {response.error ? response.error : ""}
    </div>
  );
};

export default IncreaseQuantity;

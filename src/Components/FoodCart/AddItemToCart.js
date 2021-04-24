import { useState } from "react";
import { addItemToCartRequest } from "../../services/foodCartService";
import "./addReplace.css";
const AddItemToCart = () => {
  const itemList = [
    { itemId: 1, itemName: "Chocolate", quantity: 1 },
    { itemId: 2, itemName: "pizza", quantity: 10 },
    { itemId: 3, itemName: "colddrink", quantity: 1 },
  ];
  const cart = {
    name: "SJ",
    item: {
      item: 1,
      cost: 6,
    },
  };
  const [state, setState] = useState({
    itemId: "",
    select: false,
  });

  const response = { order: undefined, error: "" };

  const onHandleChange = (e) => {
    const { name, value, checked } = e.target;
    console.log(value, checked);
    setState({ ...state, [name]: value, select: checked });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state });
  };
  return (
    <div className="container">
      <h2 className="heading">Add Item To Cart</h2>
    
        {itemList.map((item) => (
          <div key={item.itemId} className="cartItem">
            <h5>{item.itemName}</h5>
            <div className="symbol">-</div>
            <span className="value">{item.quantity}</span>
            <div className="symbol">+</div>
          </div>
        ))}

        <button type="submit" className="btn btn-primary">
          Create Order
        </button>
    </div>
  );
};

export default AddItemToCart;

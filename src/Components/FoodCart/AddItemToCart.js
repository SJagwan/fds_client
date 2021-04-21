import { useState } from "react";
const AddItemToCart = () => {
  const itemList = [
    { id: 1, name: "Chocolate" },
    { id: 2, name: "pizza" },
    { id: 3, name: "colddrink" },
  ];
  const cart = {
    name: "SJ",
    item:{
        item:1,
        cost:6
    }
  };
  const [state, setState] = useState({
    customerId:"",
    itemId: "",
    foodcart: undefined,
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, foodcart: cart });
  };
  return (
    <div>
      <h2>Add Item To Cart</h2>
      <form onSubmit={onHandleSubmit}>
        <label>Item Id</label>
        <select name="itemId" onChange={onHandleChange}>
          <option disabled selected>
            select Item
          </option>
          {itemList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItemToCart;

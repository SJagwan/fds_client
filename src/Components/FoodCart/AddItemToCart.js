import { useState } from "react";
import { addItemToCartRequest } from "../../services/foodCartService";
const AddItemToCart = () => {
  const itemList = [
    { itemId: 1, itemName: "Chocolate",select:true },
    { itemId: 2, itemName: "pizza",select:false },
    { itemId: 3, itemName: "colddrink",select:false },
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
    select:false
  });

  const response={order:undefined,error:""}

  const onHandleChange = (e) => {
    const { name, value ,checked} = e.target;
    console.log(value,checked)
    setState({ ...state, [name]: value ,select:checked });
    
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state});
  };
  return (
    <div className="container">
      <h2>Add Item To Cart</h2>
      <form onSubmit={onHandleSubmit}>
        {itemList.map((item) => (
          <div key={item.itemId} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              name="itemId"
              value={item.itemId}
              onChange={onHandleChange}
            />
            <label className="form-check-label">
              {item.itemName}
            </label>
          </div>
        ))}

        <button type="submit" className="btn btn-primary">Create Order</button>
      </form>
    </div>
  );
};

export default AddItemToCart;

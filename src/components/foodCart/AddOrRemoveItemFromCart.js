import { useDispatch, useSelector } from "react-redux";
import {
  itemToCartIncreaseThunk,
  itemToCartReduceThunk,
} from "../../redux/foodCart/itemToCart/itemToCartAction";
import { addOrderThunk } from "../../redux/orderDetail/addOrderDetail/addOrderAction";
import DisplayOrderDetail from "../orderDetail/DisplayOrderDetail";
import "./itemToCart.css";
const AddOrRemoveItemFromCart = () => {
  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return {
      items: state.itemToCart.items,
      order: state.addOrder.orderDetail,
      error: state.addOrder.error,
      customerId:state.viewAllCustomer.customer,
    };
  });

  const onHandlePlace = (e) => {
    e.preventDefault();
    const customerId = response.customerId;
    dispatch(addOrderThunk(customerId));
  };
  const onHandleReduce = (itemId) => {
    const data = {
      itemId: itemId,
      customerId: response.customerId,
      quantity: 1,
    };
    dispatch(itemToCartReduceThunk(data));
  };
  const onHandleIncrease = (itemId) => {
    const data = {
      itemId: itemId,
      customerId: response.customerId,
      quantity: 1,
    };
    dispatch(itemToCartIncreaseThunk(data));
  };
  return (
    <div className="cartItem">
      <h2 className="title border-bottom">Cart</h2>
      {response.items.map((item) => (
        <div key={item.itemId} className="itemCart">
          <h5>{item.itemName}</h5>
          <div className="symbol" onClick={() => onHandleReduce(item.itemId)}>
            -
          </div>
          <span className="value">{item.quantity}</span>
          <div className="symbol" onClick={() => onHandleIncrease(item.itemId)}>
            +
          </div>
        </div>
      ))}
      <button type="submit" className="btn btn-primary" onClick={onHandlePlace}>
        Place Order
      </button>
      {response.order ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Order</h4>
          <DisplayOrderDetail order={response.order} />
        </div>
      ) : (
        ""
      )}
      {response.error ? (
        <div className="alert alert-danger mt-3" role="alert">
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddOrRemoveItemFromCart;

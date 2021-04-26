import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayOrderDetail from "./DisplayOrderDetail";
import {viewOrderThunk} from '../../redux/orderDetail/viewOrderDetail/viewOrderAction'

const ViewOrderDetail = () => {

  const dispatch=useDispatch();
  const response=useSelector((state)=>{
    return{
      order:state.viewOrder.orderDetail,
      error:state.viewOrder.error
    }
  })
  const orderList = [{ orderId: 1 }, { orderId: 2 }, { orderId: 3 }];
  const [state, setState] = useState({
    orderId: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewOrderThunk(state))
  };
  return (
    <div className="container">
      <h2>View Order Detail</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Order Id</label>
          <select
            className="form-control"
            name="orderId"
            onChange={onHandleChange}
          >
            <option disabled selected>
              select order
            </option>
            {orderList.map((order, index) => (
              <option key={order.orderId} value={order.orderId}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {response.order ? (
        <DisplayOrderDetail order={response.order} />
      ) : (
        ""
      )}
      {response.error ? response.error : ""}
    </div>
  );
};

export default ViewOrderDetail;

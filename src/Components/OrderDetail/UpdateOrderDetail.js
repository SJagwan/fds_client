import { useState } from "react";

const UpdateOrderDetail = () => {
  const orderList = [
    { id: 1, name: "SJ" },
    { id: 2, name: "Hardik" },
    { id: 3, name: "Food" },
  ];
  const order = {
    name: "SJ",
    customer: "12",
  };
  const [state, setState] = useState({
    status: "",
    id: "",
    orderDetail: undefined,
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, orderDetail: order });
  };
  return (
    <div>
      <h2>Update Order Request</h2>
      <form onSubmit={onHandleSubmit}>
        <label>Id</label>
        <select name="id" onChange={onHandleChange}>
          <option disabled selected>
            select order
          </option>
          {orderList.map((order) => (
            <option key={order.id} value={order.id}>
              {order.name}
            </option>
          ))}
        </select>
        <label>Status</label>
        <select name="status" onChange={onHandleChange}>
          <option disabled selected>
            {" "}
            select Status{" "}
          </option>
          <option> Arriving </option>
          <option> Delivered </option>
        </select>
        <button type="submit">Submit</button>
      </form>
      Status:- {state.status}
      <br />
      Id:- {state.id}
      <br />
      {console.log(state.orderDetail)}
    </div>
  );
};

export default UpdateOrderDetail;

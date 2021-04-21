import { useState } from "react";
const ViewOrderDetailByCustomer = () => {
  const customerList = [
    { id: 1, name: "SJ" },
    { id: 2, name: "Hardik" },
    { id: 3, name: "O4ASJ" },
  ];
  const order = [
    {
      name: "SJ",
      customer: "12",
    },
    {
        name:"O4ASJ",
        customer:"2"
    },
  ];

  const [state, setState] = useState({
    customerId: "",
    orderDetail: [],
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
      <h2>View Order Detail By Customer Name</h2>
      <form onSubmit={onHandleSubmit}>
        <label>Customer Id</label>
        <select name="customerId" onChange={onHandleChange}>
          <option disabled selected>
            select order
          </option>
          {customerList.map((order) => (
            <option key={order.id} value={order.id}>
              {order.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      <br />
      Id:- {state.customerId}
      <br />
      {console.log(state.orderDetail)}
    </div>
  );
};

export default ViewOrderDetailByCustomer;

import { useState } from "react";
import DisplayListOrderDetail from "./DisplayListOrderDetail";
const ViewOrderDetailByCustomer = () => {
  // const customerList = [
  //   { customerId: 1, firstName: "SJ" },
  //   { customerId: 2, firstName: "Hardik" },
  //   { customerId: 3, firstName: "O4ASJ" },
  // ];
  const order = [
    {
    orderId:"1",
	  customerId:"2",
	  firstName:"Shubhanshu",
	  orderStatus:"delievered",
	  orderDate:'20/21',
	  itemName:["cake","pizza"]
    },
    {
    orderId:"3",
	  customerId:"4",
	  firstName:"\Hardik",
	  orderStatus:"delievered",
	  orderDate:'1/4/21',
	  itemName:["pizza","lays"]
    },
  ];

  // const [state, setState] = useState({
  //   customerId: ""
  // });

  const response={orderDetailList:undefined,error:""}

  // const onHandleChange = (e) => {
  //   const { name, value } = e.target;
  //   setState({ ...state, [name]: value });
  // };
  // const onHandleSubmit = (e) => {
  //   e.preventDefault();
  //   setState({ ...state});
  // };
  return (
    <div className="container">
      <h2>View Order Detail By Customer Name</h2>
      {/* <form onSubmit={onHandleSubmit}>
        <div className="form-group">
        <label>Customer Id</label>
        <select className="form-control" name="customerId" onChange={onHandleChange}>
          <option disabled selected>
            select CustormerID
          </option>
          {customerList.map((customer) => (
            <option key={customer.customerId} value={customer.customerId}>
              {customer.firstName}
            </option>
          ))}
        </select>
        </div>
        
        <button className="btn btn-primary" type="submit">Submit</button>
      </form> */}

      {
        response.orderDetailList ? 
        <DisplayListOrderDetail orderList={response.orderDetailList}/> : ""
      }
      {
        response.error ? response.error :""
      }



    </div>
  );
};

export default ViewOrderDetailByCustomer;

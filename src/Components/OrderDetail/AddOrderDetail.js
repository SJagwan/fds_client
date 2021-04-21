import { useState } from "react";
import { addOrderRequest } from "../../Services/OrderDetailService";

const AddOrderDetail = () => {
  const customerList = [
    { id: 1, name: "SJ" },
    { id: "1859309095", name: "Hardik" },
    { id: 3, name: "O4ASJ" },
  ];
  const order = {
    name: "SJ",
    customer: "12",
  };

  const [state, setState] = useState({
    customerId: "",
    error:"",
    orderDetail: undefined,
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    
    const promise=addOrderRequest(state.customerId);
    promise.then(response=>{
      // console.log(response.data)
      setState({ ...state, orderDetail: response.data });
    }).catch(error=>{
      console.log("inside error",error.response.data)
      setState({ ...state, error: error.message });
    })
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>Customer Id</label>
        <select name="customerId" onChange={onHandleChange}>
          <option disabled selected>
            select CustomerId
          </option>
          {customerList.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      CustomerId:- {state.customerId}
      <br />
      {console.log(state.orderDetail)}
    </div>
  );
};

export default AddOrderDetail;

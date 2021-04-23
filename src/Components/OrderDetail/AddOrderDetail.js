import { useState } from "react";
import { addOrderRequest } from "../../services/orderDetailService";
import DisplayOrderDetail from "./DisplayOrderDetail";

const AddOrderDetail = () => {
  const customerList = [
    { id: "3624803138", name: "SJ" },
    { id: "9443084071", name: "Hardik" },
    { id: "2054398488", name: "O4ASJ" },
  ];
  const order = {
    orderId: "SJ",
    customerId: "12",
    name:"Picka",
    status:"delivered",
    item:[{name:"cake"},{name:"choco"}]
  };

  const [state, setState] = useState({ customerId: ""});

  const response ={orderDetail:undefined,error:"error found"}

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state});
    
    // const promise=addOrderRequest(state.customerId);
    // promise.then(response=>{
    //   console.log(response.data)
    //   // setState({ ...state, orderDetail: response.data });
    // }).catch(error=>{
    //   console.log("inside error",error.response.data)
    //   // setState({ ...state, error: error.message });
    // })
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

      {
        response.orderDetail ? 
        (<DisplayOrderDetail order={response.orderDetail}/>) : ""
      }
      {
        response.error ? response.error :""
      }

    </div>
  );
};

export default AddOrderDetail;


import { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetail";

const ViewCustomerDetail = () => {

    const customer={
        firstName:"Vijay",
        id:"07"
    }
    const customerList = [
        { customerId: "3624803138", name: "SJ" },
        { customerId: "9443084071", name: "Hardik" },
        { customerId: "2054398488", name: "vijay" },
      ];
      
    const [state,setState]=useState({id:""})
    const response={CustomerDetail:customer, error:""}

        const onHandleId=(e)=>{
        setState({...state,id:e.target.value})
    }
    const onHandleSubmit=(e)=>{
        e.preventDefault();
        setState({...state})

    }
    return ( 
        <div>
            <h2>View Customer Request</h2>
            <form onSubmit={onHandleSubmit}>
                <label>customerId</label>
                <select name="id" onChange={onHandleId}>
          <option disabled selected>
            select customerId
          </option>
          {customerList.map((customer) => (
            <option key={customer.customerId} value={customer.customerId}>
              {customer.name}
            </option>
          ))}
        </select>
                <button>Submit</button>
            </form>
            {
               response.CustomerDetail? (<DisplayCustomerDetails customer={response.CustomerDetail}/>) :""
           }
           {
               response.error? response.error:""
           }

        </div>
        

     );
}
 
export default ViewCustomerDetail;
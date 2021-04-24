import { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetail";

const UpdateCustomerDetail = () => {

    const customer={
        customerId:"007",
        firstName:"Vijay",
        lastName:"san",
        gender:"male"
    }
    const [state,setState]=useState({firstName:"", lastName:"",age:""})
    const response={customerDetail:customer, error:""}

    const onHandleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setState({...state,[name]:value})
    }
    
    const onHandleSubmit=(e)=>{
        e.preventDefault();
        setState({...state})

    }
    return ( 
        <div className="container">
            <h2>Update Customer Request</h2>
            <form onSubmit={onHandleSubmit}>
            <div className="form-group">
                <label>firstName</label>
                <input type="text" className="form-control" name="firstName" onChange={onHandleChange}/>
            </div>
            <div className="form-group">
                <label>lastName</label>
                <input type="text" className="form-control" name="lastName" onChange={onHandleChange}/>
            </div>
            <div className="form-group">
            <label>Age</label>
                <input type="text" className="form-control" name="age" onChange={onHandleChange}/>
            </div>
                <button>Submit</button>
            </form>
            {
               response.customerDetail? (<DisplayCustomerDetails customer={response.customerDetail}/>) :""
           }
           {
               response.error? response.error:""
           }
        </div>
        

     );
}
 
export default UpdateCustomerDetail;
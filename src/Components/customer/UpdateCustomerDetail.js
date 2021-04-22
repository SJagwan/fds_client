import { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetail";

const UpdateCustomerDetail = () => {

    const customer={
        firstName:"Vijay",
        lastName:"san",
        id:"07",
        age:"21"
    }
    const [state,setState]=useState({firstName:"", lastName:"",age:"",mobileNumber:"",email:"",buildingName:"",area:"",gender:"",pincode:""})
    const response={CustomerDetail:customer, error:""}

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
        <div>
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
            <div className="form-group">
            <label>mobileNumber</label>
                <input type="text" className="form-control" name="mobileNumber" onChange={onHandleChange}/>
            </div>
            <div className="form-group">
            <label>email</label>
                <input type="text" className="form-control" name="email" onChange={onHandleChange}/>
            </div>
            <div className="form-group">
            <label>Gender</label>
                <input type="text" className="form-control" name="gender" onChange={onHandleChange}/>
            </div>
            <div className="form-group">
            <label>Pincode</label>
                <input type="text" className="form-control" name="pincode" onChange={onHandleChange}/>
            </div>
            <div className="form-group">
            <label>Area</label>
                <input type="text" className="form-control" name="area" onChange={onHandleChange}/>
            </div>
            <div className="form-group">
                <label>BuildingName</label>
                <input type="text" className="form-control" name="buildingName" onChange={onHandleChange}/>
            </div>
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
 
export default UpdateCustomerDetail;
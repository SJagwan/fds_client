import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerThunk } from "../../redux/customer/updateCustomer/updateCustomerAction";
import DisplayCustomerDetails from "./DisplayCustomerDetail";

const UpdateCustomerDetail = () => {

    const dispatch=useDispatch();
    const response=useSelector((state)=>{
      return{
      customer:state.updateCustomer.customer,
      error:state.updateCustomer.error
      }
    })

    const [state,setState]=useState({firstName:"", lastName:"",age:""})    

    const onHandleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setState({...state,[name]:value})
    }
    
    const onHandleSubmit=(e)=>{
        e.preventDefault();
        dispatch(updateCustomerThunk(state));
       
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
               response.customer? (<DisplayCustomerDetails customer={response.customer}/>) :""
           }
           {
               response.error? response.error:""
           }
        </div>
        

     );
}
 
export default UpdateCustomerDetail;
import { useState } from "react";

const AddCustomerDetail = () => {

    const customer={
        firstName:"Vijay",
        lastName:"san",
        id:"07",
        age:"21",
        mobileNumber:"856479255",
        email:"vijay07@gmail"
    }
    const [state,setState]=useState({firstName:"", lastName:"",age:"",mobileNumber:"",email:"",status:"",id:"",CustomerDetail:undefined})
    const onHandlefirstName=(e)=>{
        setState({...state,firstName:e.target.value})
    }
    const onHandlelastName=(e)=>{
        setState({...state,lastName:e.target.value})
    }
    const onHandleAge=(e)=>{
        setState({...state,age:e.target.value})
    }
    const onHandleId=(e)=>{
        setState({...state,id:e.target.value})
    }
    const onHandleNumber=(e)=>{
        setState({...state,mobileNumber:e.target.value})
    }
    const onHandleMailId=(e)=>{
        setState({...state,email:e.target.value})
    }
    const onHandleSubmit=(e)=>{
        e.preventDefault();
        setState({...state,CustomerDetail:customer})

    }
    return ( 
        <div>
            <h2>Add Customer Request</h2>
            <form onSubmit={onHandleSubmit}>
                <label>Id</label>
                <input type="text" onChange={onHandleId}/>
                <label>firstName</label>
                <input type="text" onChange={onHandlefirstName}/>
                <label>lastName</label>
                <input type="text" onChange={onHandlelastName}/>
                <label>Age</label>
                <input type="text" onChange={onHandleAge}/>
                <label>mobileNumber</label>
                <input type="text" onChange={onHandleNumber}/>
                <label>email</label>
                <input type="text" onChange={onHandleMailId}/>
                <label>Status</label>
                <input type="text" onChange={onHandleStatus}/>
                <button>Submit</button>
            </form>
            Status:- {state.status}<br/>
            Id:- {state.id}<br/>
            firstName:- {state.firstName}<br/>
            lastName:- {state.lastName}<br/>
            age:- {state.age}<br/>
            mobileNumber:- {state.mobileNumber}<br/>
            email:- {state.email}<br/>
            {console.log(state.CustomerDetail)}

        </div>
        

     );
}
 
export default UpdateCustomerDetail;
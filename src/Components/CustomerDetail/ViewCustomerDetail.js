import { useState } from "react";

const ViewCustomerDetail = () => {

    const customer={
        name:"Vijay",
        customer:"07"
    }
    const [state,setState]=useState({status:"",id:"",CustomerDetail:undefined})
    const onHandleStatus=(e)=>{
        setState({...state,status:e.target.value})
    }
    const onHandleId=(e)=>{
        setState({...state,id:e.target.value})
    }
    const onHandleSubmit=(e)=>{
        e.preventDefault();
        setState({...state,CustomerDetail:order})

    }
    return ( 
        <div>
            <h2>View Customer Request</h2>
            <form onSubmit={onHandleSubmit}>
                <label>Id</label>
                <input type="text" onChange={onHandleId}/>
                <label>Status</label>
                <input type="text" onChange={onHandleStatus}/>
                <button>Submit</button>
            </form>
            Status:- {state.status}<br/>
            Id:- {state.id}<br/>
            {console.log(state.OrderDetail)}

        </div>
        

     );
}
 
export default ViewCustomerDetail;
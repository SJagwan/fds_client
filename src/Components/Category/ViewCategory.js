import { useState } from "react";

const ViewCategory = () => {

    const category={
       id : "1",
        name:"ViewCategory"
    }

    const [state,setState]=useState({id:"", category : undefined})

    const onHandleId=(e)=>{
        setState({...state,id:e.target.value})
    }

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        setState({...state,category:category})
    }

    return ( 
        <div>
            <h2>View Category</h2>
            <form onSubmit={onHandleSubmit}>
                <label>Id</label>
                <input type="number" onChange={onHandleId}/>
                <button>Submit</button>
            </form>
            Id - {state.id}

        </div>
        

     );
}
 
export default ViewCategory;
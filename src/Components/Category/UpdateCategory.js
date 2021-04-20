import { useState } from "react";

const UpdateCategory = () => {

    const category={
       id : "1",
        name:"UpdateCategory"
    }

    const [state,setState]=useState({name:"", id : "" , category : undefined})

    const onHandleName=(e)=>{
        setState({...state,name:e.target.value})
    }

    const onHandleId=(e)=>{
        setState({...state,id:e.target.value})
    }

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        setState({...state,category:category})
    }

    return ( 
        <div>
            <h2>Update Category</h2>
            <form onSubmit={onHandleSubmit}>
                <label>Id</label>
                <input type="number" onChange={onHandleId}/>
                <label>Name</label>
                <input type="text" onChange={onHandleName}/>
                <button>Submit</button>
            </form>
            
            Id   - {state.id}<br/>
            Name - {state.name}

        </div>
        

     );
}
 
export default UpdateCategory;
import { useState } from "react";

const AddCategory = () => {

    const category={
       id : "1",
        name:"AddCategory"
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
            <h2>Add Category</h2>
            <form onSubmit={onHandleSubmit}>
                <label>Id</label>
                <input type="text" onChange={onHandleId}/>
                <button>Submit</button>
            </form>
            Id - {state.id}

        </div>
        

     );
}
 
export default AddCategory;
import { useState } from "react";

const AddCategory = () => {

    const category={
       id : "1",
        name:"AddCategory"
    }

    const [state,setState]=useState({id:"", category : undefined})

    const onHandleName=(e)=>{
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
                <label>Name</label>
                <input type="text" onChange={onHandleName}/>
                <button>Submit</button>
            </form>
            Name - {state.name}

        </div>
        

     );
}
 
export default AddCategory;
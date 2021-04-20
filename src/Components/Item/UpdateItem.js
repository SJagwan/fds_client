import { useState } from "react"

const UpdateItem = () => {
    const [state,setState]=useState({itemName:"",cost:"",quantity:"",itemId:"",item:undefined})
    const itemmock = {
        itemName:"Cake",
        cost:"100",quantity:"2",restaurantId:"Dominos",catId:"Bakery"
    }
    const onHandleChange = (event)=>{
        const name=event.target.name;
        const value = event.target.value;
        setState({...state,[name]:value})
    }
    const onSubmit = (event) => {
        event.preventDefault()
        setState({...state,item:itemmock})
    }
    return ( 
        <div>
             <br />
      <h1>Update Item</h1>
      <br />
            <form onSubmit={onSubmit}>
                <br/>
                <label> Item Id</label>
                <input type="text" name ="itemId" onChange={onHandleChange}/>
                <br/>
                <label> Item Name</label>
                <input type="text" name ="itemName" onChange={onHandleChange}/>
                <br/>
                <label> Cost</label>
                <input type="text" name ="cost" onChange={onHandleChange}/>
                <br/>
                <label> Quantity</label>
                <input type="number" name ="quantity" onChange={onHandleChange}/>
                <br/>
                <button>Submit</button>
            </form>
            <br/>
            Item Id - {state.itemId}
            <br/>
            Item Name - {state.itemName}
            <br/>
            Cost - {state.cost}
            <br/>
            Quantity - {state.quantity}
            <br/>
            {console.log(state.item)}
        </div>
     );
}
export default UpdateItem;
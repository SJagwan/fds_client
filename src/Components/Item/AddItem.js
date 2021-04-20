import { useState } from "react"

const AddItem = () => {
    const [state,setState]=useState({itemName:"",cost:"",quantity:"",restaurantId:"",catId:"",item:undefined})
    const itemmock = {
        itemName:"Cake",
        cost:"100",quantity:"2",restaurantId:"Dominos",catId:"Bakery"
    }
    const item1 =[
        {itemName:"Cake",
        cost:"100",quantity:"2",restaurantId:"Dominos",catId:"Bakery"},
        {itemName:"Cake",
        cost:"100",quantity:"2",restaurantId:"Dominos",catId:"Bakery"}
    ]

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
            <form onSubmit={onSubmit}>
                <br/>
                <h1>Add Item</h1>
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
                <label> Resturant Id</label>
                <input type="text" name ="restaurantId" onChange={onHandleChange}/>
                <br/>
                <label> Cat Id</label>
                <input type="text" name ="catId" onChange={onHandleChange}/>
                <button>Submit</button>
            </form>
            Item Name - {state.itemName}
            Cost - {state.cost}
            Quantity - {state.quantity}
            Restaurant Id - {state.restaurantId}
            Cat Id -{state.catId}
            {console.log(state.item)}
        </div>
        
     );
}
 
export default AddItem;
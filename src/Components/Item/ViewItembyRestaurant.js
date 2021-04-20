import { useState } from "react";

const ViewItembyRestaurant = () => {
    
    const [state,setState]=useState({restaurantId:"",item:[]})
    const itemlistmock =[
        {itemName:"Cake",
        cost:"100",quantity:"2",restaurantId:"PizzaHut",catId:"Bakery"},
        {itemName:"Pizza",
        cost:"200",quantity:"1",restaurantId:"PizzaHut",catId:"Pizza"}
    ]
    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value });
      }
      const onSubmit = (event) => {
        event.preventDefault();
        setState({...state,item:itemlistmock})
      }
    return ( <div> <br/>
       <h1>View Item By Restaurant</h1>
       <br/>
        <form onSubmit={onSubmit}>
           
       <br></br>
        <label> Restaurant Id</label>
        <input type="text" name ="restaurantId" onChange={onHandleChange}/>
        <br/>
        <button>Submit</button>
    </form>
    
    <br/>
    Restaurant Id- {state.restaurantId}
    <br/>
    {console.log(state.item)}
    </div> );
}
 
export default ViewItembyRestaurant;
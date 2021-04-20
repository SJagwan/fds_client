import { useState } from "react";

const ViewItembyName = () => {
    const [state,setState]=useState({itemName:"",item:[]})
    const itemlistmock =[
        {itemName:"Cake",
        cost:"100",quantity:"2",restaurantId:"Dominos",catId:"Bakery"},
        {itemName:"Cake",
        cost:"200",quantity:"1",restaurantId:"PizzaHut",catId:"Bakery"}
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
    return (  <div>
         <br />
      <h1>View Item By Name</h1>
      <br /><form onSubmit={onSubmit}>
       
        <label> Item Name</label>
        <input type="text" name ="itemName" onChange={onHandleChange}/>
        <br/>
        <button>Submit</button>
    </form>
    
    <br/>
    Item Name - {state.itemName}
    <br/>
    {console.log(state.item)}

    </div>);
}
 
export default ViewItembyName;
import { useState } from "react";
import DisplayListItemDetail from "./DisplayListItemDetail";

const ViewItembyName = () => {
    const [state,setState]=useState({itemName:""})
    
    const itemlistmock =[
        {itemName:"Cake",itemId:"asdas",
        cost:"100",quantity:"2",restaurantId:"Dominos",catId:"Bakery"},
        {itemName:"Cake",itemId:"asas",
        cost:"200",quantity:"1",restaurantId:"PizzaHut",catId:"Bakery"}
    ]
    const response={itemlist:undefined,error:""}
    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value });
      }
      const onSubmit = (event) => {
        event.preventDefault();
        setState({...state})
      }
    return (  <div className="container">
         
      <h1>View Item By Name</h1>
      <form onSubmit={onSubmit}>
       
      <div className="form-group" >
        <label> Item Name</label>
        <input type="text"  name ="itemName" className="form-control" onChange={onHandleChange}/>
      </div>

      <button>Submit</button>
    </form>
    {
        response.itemlist ? <DisplayListItemDetail itemList={response.itemlist}/> : ""
    }
    {
      response.error ? response.error : ""
    }
    </div>);
}
 
export default ViewItembyName;
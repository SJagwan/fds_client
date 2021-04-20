import { useState } from "react";

const ViewItembyCategory = () => {
    const [state,setState]=useState({categoryId:"",item:[]})
    const itemlistmock =[
        {itemName:"Cake",
        cost:"100",quantity:"2",restaurantId:"Dominos",catId:"Bakery"},
        {itemName:"Pizza",
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
    return (  
        <div><form onSubmit={onSubmit}>
       <h1>View Item By Category</h1>
       <br></br>
        <label> Category Id</label>
        <input type="text" name ="categoryId" onChange={onHandleChange}/>
        <br/>
        <button>Submit</button>
    </form>
    
    <br/>
    Category Id- {state.categoryId}
    <br/>
    {console.log(state.item)}
</ div>
    );
}
 
export default ViewItembyCategory;
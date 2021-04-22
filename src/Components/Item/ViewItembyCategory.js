import { useState } from "react";
import DisplayListItemDetail from "./DisplayListItemDetail";

const ViewItembyCategory = () => {
    const [state,setState]=useState({catId:""})
    const itemlistmock =[
        {itemName:"Cake",itemId:"aaf",
        cost:"100",quantity:"2",restaurantId:"Dominos",catId:"Bakery"},
        {itemName:"Pizza",itemId:"abc",
        cost:"200",quantity:"1",restaurantId:"PizzaHut",catId:"Bakery"}
    ]
    const response={itemlist:undefined,error:""}
    const categoryList = [
      { catId: 1, name: "SJP" },
      { catId: 2, name: "Hardik" },
      { catId: 3, name: "Food" },
    ];
    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value });
      }
      const onSubmit = (event) => {
        event.preventDefault();
        setState({...state})
      }
    return (  
        <div className="container">
          <form onSubmit={onSubmit}>
       <h1>View Item By Category</h1>

    
       <div className="form-group">
        <label> Cat Id</label>
        <select name="catId"  className="form-control" onChange={onHandleChange}>
          <option disabled selected>
            Select Category Id
          </option>
          {categoryList.map((category) => (
            <option key={category.catId} value={category.catId}>
              {category.name}
            </option>
          ))}
        </select>
        </div>
        <button>Submit</button>
    </form>
  
    {
        response.itemlist ? <DisplayListItemDetail itemList={response.itemlist}/> : ""
    }
    {
      response.error ? response.error : ""
    }
</ div>
    );
}

export default ViewItembyCategory;
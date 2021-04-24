import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewRestaurantByIdThunk } from "../../redux/restaurant/viewRestaurantById/viewRestaurantByIdAction";
import DisplayRestaurant from "./DisplayRestaurant";

const ViewRestaurantById = () => {
  const dispatch=useDispatch();
  const response=useSelector((state)=>{
    return{
      restaurant:state.viewRestaurantById.restaurant,
      error:state.viewRestaurantById.error
    }
  })
  
  const [state, setState] = useState({
    restaurantId: ""

  });
  const RestaurantList = [
    { id: "9170007147", name: "Taj" },
    { id: "9443084071", name: "Hardik" },
    { id: "2054398488", name: "O4ASJ" },
  ];
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
 
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewRestaurantByIdThunk(state))
  };
  return (
    <div>
      <h2>View By Restaurant Id</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
        <label>Restaurant By Id</label>
        <select name="restaurantId" onChange={onHandleChange} className="form-control">
          <option disabled selected>
            select restaurantId
          </option>
          {RestaurantList.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>
        </div>
        <button className="btn btn-primary">Submit</button>
        <br />
      </form>
      {
       response.restaurant?
       (<DisplayRestaurant restaurant={response.restaurant}/>):""
      }
      {
        response.error ? response.error :""
      }
     
    </div>
  );
};

export default ViewRestaurantById;

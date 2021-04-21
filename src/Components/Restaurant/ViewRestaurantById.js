import { useState } from "react";
import DisplayRestaurant from "./DisplayRestaurant";

const ViewRestaurantById = () => {
  const restaurant = {
    restaurantName: "Chawla",
    managerName: "Mayank",
    contactNumber: "9999955555",
    buildingName: "RedQuarter",
    area: "Lajpat Nagar",
    streetNo: "5",
    city: "Ghaziabad",
    state: "Uttar Pradesh",
    country: "India",
    pincode: "201005",
  };
  const [state, setState] = useState({
    restaurantId: ""

  });
  const RestaurantList = [
    { id: "3624803138", name: "SJ" },
    { id: "9443084071", name: "Hardik" },
    { id: "2054398488", name: "O4ASJ" },
  ];
  const response ={restaurant:undefined,error:""}
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
 
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state});
  };
  return (
    <div>
      <h2>View By Restaurant Id</h2>
      <form onSubmit={onHandleSubmit}>
        <label>Restaurant By Id</label>
        <select name="restaurantId" onChange={onHandleChange}>
          <option disabled selected>
            select restaurantId
          </option>
          {RestaurantList.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>
        <button>Submit</button>
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

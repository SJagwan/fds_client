import { useState } from "react";
import DisplayRestaurant from "./DisplayRestaurant";

const AddRestaurant = () => {
  const restaurantMock = {
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
    restaurantName: "",
    managerName: "",
    contactNumber: "",
    buildingName: "",
    area: "",
    streetNo: "",
    city: "",
    state: "",
    country: "",
    pincode: ""

  });
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
      <h2>Add Restaurant</h2>
      <form onSubmit={onHandleSubmit}>
        <label>RestaurantName</label>
        <input type="text" name="restaurantName" onChange={onHandleChange} />
        <br />
        <label>ManagerName</label>
        <input type="text" name="managerName" onChange={onHandleChange} />
        <br />
        <label>ContactNumber</label>
        <input type="text" name="contactNumber" onChange={onHandleChange} />
        <br />
        <label>BuildingName</label>
        <input type="text" name="buildingName" onChange={onHandleChange} />
        <br />
        <label>Area</label>
        <input type="text" name="area" onChange={onHandleChange} />
        <br />
        <label>StreetNo</label>
        <input type="text" name="streetNo" onChange={onHandleChange} />
        <br />
        <label>City</label>
        <input type="text" name="city" onChange={onHandleChange} />
        <br />
        <label>State</label>
        <input type="text" name="state" onChange={onHandleChange} />
        <br />
        <label>Country</label>
        <input type="text" name="country" onChange={onHandleChange} />
        <br />
        <label>Pincode</label>
        <input type="text" name="pincode" onChange={onHandleChange} />
        <br />
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

export default AddRestaurant;

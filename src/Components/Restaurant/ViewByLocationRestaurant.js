import { useState } from "react";
import DisplayRestaurantList from "./DisplayRestaurantList";
const ViewByLocationRestaurant = () => {
  const [state, setState] = useState({
    pincode: "",
  });
  const restaurantList=[
      {
        restaurantId:"001",
        restaurantName: "Chawla",
        managerName: "Mayank",
        contactNumber: "9999955555",
        buildingName: "RedQuarter",
        area: "Lajpat Nagar",
        streetNo: "5",
        city: "Ghaziabad",
        state: "Uttar Pradesh",
        country: "India",
        pincode: "201005"
      },
      {
        restaurantId:"002",
        restaurantName: "McD",
        managerName: "Tyagi",
        contactNumber: "9999944444",
        buildingName: "tower",
        area: "delhi",
        streetNo: "2",
        city: "delhi",
        state: "delhi",
        country: "India",
        pincode: "211005",
      }
  ]
  const response={restaurant:undefined,error:"hello"}
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state });
  };
  return (
    <div>
      <h2>Add Restaurant</h2>
      <form onSubmit={onHandleSubmit}>
        <label>Pincode</label>
        <input type="text" name="pincode" onChange={onHandleChange} />
        <button>Submit</button>
      </form>
      {
          response.restaurant?
          (<DisplayRestaurantList restaurantList={response.restaurant}/> ):""
      }
      {response.error ? response.error : ""}
    </div>
  );
};

export default ViewByLocationRestaurant;

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
        <div className="form-group">
        <label>RestaurantName</label>
        <input type="text" name="restaurantName" className="form-control" onChange={onHandleChange} />
        </div>
        <div className="form-group">
        <label>ManagerName</label>
        <input type="text" name="managerName" className="form-control" onChange={onHandleChange} />
        </div>
        <div className="form-group">
        <label>ContactNumber</label>
        <input type="text" name="contactNumber" className="form-control" onChange={onHandleChange} />
        </div>
        <div className="form-group">
        <label>BuildingName</label>
        <input type="text" name="buildingName" className="form-control" onChange={onHandleChange} />
        </div>
        <div className="form-group">
        <label>Area</label>
        <input type="text" name="area" className="form-control" onChange={onHandleChange} />
        </div>
        <div className="form-group">
        <label>StreetNo</label>
        <input type="text" name="streetNo" className="form-control" onChange={onHandleChange} />
        </div>
        <div className="form-group">
        <label>City</label>
        <input type="text" name="city" className="form-control" onChange={onHandleChange} />
        </div>
        <div className="form-group">
        <label>State</label>
        <input type="text" name="state" className="form-control" onChange={onHandleChange} />
        </div>
        <div className="form-group">
        <label>Country</label>
        <input type="text" name="country" className="form-control" onChange={onHandleChange} />
        </div>
        <div className="form-group">
        <label>Pincode</label>
        <input type="text" name="pincode" className="form-control" onChange={onHandleChange} />
        </div>
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

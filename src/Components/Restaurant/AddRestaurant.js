import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurantThunk } from "../../redux/restaurant/addRestaurant/addRestaurantAction";
import DisplayRestaurant from "./DisplayRestaurant";

const AddRestaurant = () => {
  const dispatch=useDispatch();
  const response=useSelector((state)=>{
    return{
      restaurant:state.addRestaurant.restaurant,
      error:state.addRestaurant.error
    }
  })
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
    pincode: "",
    validations: { pincode: undefined, restaurantName: undefined },
  });
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let validationMsg;
    if (name === "restaurantName") {
      validationMsg = validateRestaurantName(value);
    }
    if(name==="pincode"){
      validationMsg= validateRestaurantPincode(value);
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value,validations: newValidations });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRestaurantThunk(state))
    if (state.validations.restaurantName || state.validations.pincode) {
      return;
    }
    
  };
  const validateRestaurantName = (name) => {
    if (name.length < 5) {
      return "length of restaurant name cannot be less than 5";
    }
    return undefined;
  };
  const validateRestaurantPincode = (pincode) => {
    if (pincode.length !== 6) {
      return "length of pincode should be 6 digit";
    }
    return undefined;
  };
  return (
    <div className="container">
      <h2>Add Restaurant</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>RestaurantName</label>
          <input
            type="text"
            name="restaurantName"
            className="form-control"
            onChange={onHandleChange}
          />
          {state.validations.restaurantName ? (
            <div>
              {state.validations.restaurantName}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label>ManagerName</label>
          <input
            type="text"
            name="managerName"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>ContactNumber</label>
          <input
            type="text"
            name="contactNumber"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>BuildingName</label>
          <input
            type="text"
            name="buildingName"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Area</label>
          <input
            type="text"
            name="area"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>StreetNo</label>
          <input
            type="text"
            name="streetNo"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            name="state"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input
            type="text"
            name="country"
            className="form-control"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            className="form-control"
            onChange={onHandleChange}
          />
          {state.validations.pincode ? (
            <div>
              {state.validations.pincode}
            </div>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
        <br />
      </form>
      {response.restaurant ? (
        <DisplayRestaurant restaurant={response.restaurant} />
      ) : (
        ""
      )}
      {response.error ? response.error : ""}
    </div>
  );
};

export default AddRestaurant;

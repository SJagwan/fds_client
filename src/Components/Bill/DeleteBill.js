import { useState } from "react";

const AddRestaurant = () => {
  const add = {
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
    pincode: "",
    add: undefined,
  });
  const onHandleRestaurantName = (e) => {
    setState({ ...state, restaurantName: e.target.value });
  };
  const onHandleManagerName = (e) => {
    setState({ ...state, managerName: e.target.value });
  };
  const onHandleContactNumber = (e) => {
    setState({ ...state, contactNumber: e.target.value });
  };
  const onHandleBuildingName = (e) => {
    setState({ ...state, buildingName: e.target.value });
  };
  const onHandleArea = (e) => {
    setState({ ...state, area: e.target.value });
  };
  const onHandleStreetNo = (e) => {
    setState({ ...state, streetNo: e.target.value });
  };
  const onHandleCity = (e) => {
    setState({ ...state, city: e.target.value });
  };
  const onHandleState = (e) => {
    setState({ ...state, state: e.target.value });
  };
  const onHandleCountry = (e) => {
    setState({ ...state, country: e.target.value });
  };
  const onHandlePincode = (e) => {
    setState({ ...state, pincode: e.target.value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, add: add });
  };
  return (
    <div>
      <h2>Add Restaurant</h2>
      <form onSubmit={onHandleSubmit}>
        <label>RestaurantName</label>
        <input type="text" onChange={onHandleRestaurantName} />
        <br />
        <label>ManagerName</label>
        <input type="text" onChange={onHandleManagerName} />
        <br />
        <label>ContactNumber</label>
        <input type="text" onChange={onHandleContactNumber} />
        <br />
        <label>BuildingName</label>
        <input type="text" onChange={onHandleBuildingName} />
        <br />
        <label>Area</label>
        <input type="text" onChange={onHandleArea} />
        <br />
        <label>StreetNo</label>
        <input type="text" onChange={onHandleStreetNo} />
        <br />
        <label>City</label>
        <input type="text" onChange={onHandleCity} />
        <br />
        <label>State</label>
        <input type="text" onChange={onHandleState} />
        <br />
        <label>Country</label>
        <input type="text" onChange={onHandleCountry} />
        <br />
        <label>Pincode</label>
        <input type="text" onChange={onHandlePincode} />
        <br />
        <button>Submit</button>
        <br />
      </form>
      RestaurantName:- {state.restaurantName}
      <br />
      ManagerName:- {state.managerName}
      <br />
      ContactNumber:- {state.contactNumber}
      <br />
      BuildingName:- {state.buildingName}
      <br />
      Area:- {state.area}
      <br />
      StreetNo:- {state.streetNo}
      <br />
      City:- {state.city}
      <br />
      State:- {state.state}
      <br />
      Country:- {state.country}
      <br />
      Pincode:- {state.pincode}
    </div>
  );
};

export default AddRestaurant;
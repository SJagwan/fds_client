import { useState } from "react";
import DisplayRestaurantList from "./DisplayRestaurantList";
const ViewByLocationRestaurant = () => {
  const [state, setState] = useState({
    pincode: "",
    validations: { pincode: undefined },
  });
  const restaurantList = [
    {
      restaurantId: "001",
      restaurantName: "Chawla",
      managerName: "Mayank",
      contactNumber: "9999955555",
    },
    {
      restaurantId: "002",
      restaurantName: "McD",
      managerName: "Tyagi",
      contactNumber: "9999944444",
    },
  ];
  const response = { restaurant: undefined, error: "" };
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    let validationMsg;
    if(name==="pincode"){
      validationMsg= validateRestaurantPincode(value);
    }
    const newValidations = { ...state.validations, [name]: validationMsg };
    setState({ ...state, [name]: value,validations: newValidations });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (state.validations.pincode) {
      return;
    }
    setState({ ...state });
  };
  const validateRestaurantPincode = (pincode) => {
    if (pincode.length != 6) {
      return "length of pincode should be 6 digit";
    }
    return undefined;
  };
  return (
    <div>
      <h2>View Restaurant By Location</h2>
      <form onSubmit={onHandleSubmit}>
        <label>Pincode</label>
        <input type="text" name="pincode" onChange={onHandleChange} />
        {state.validations.pincode ? (
            <div>
              {state.validations.pincode}
            </div>
          ) : (
            ""
          )}
        <button className="btn btn-primary">Submit</button>
      </form>
      {response.restaurant ? (
        <DisplayRestaurantList restaurantList={response.restaurant} />
      ) : (
        ""
      )}
      {response.error ? response.error : ""}
    </div>
  );
};

export default ViewByLocationRestaurant;

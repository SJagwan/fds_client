import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewRestaurantByLocationThunk } from "../../redux/restaurant/viewRestaurantByLocation/viewRestaurantByLocationAction";
import DisplayRestaurantList from "./DisplayRestaurantList";
const ViewByLocationRestaurant = () => {
  const dispatch=useDispatch();
  const response=useSelector((state)=>{
    return{
      restaurant:state.viewRestaurantByLocation.restaurant,
      error:state.viewRestaurantByLocation.error
    }
  })
  const [state, setState] = useState({
    pincode: "",
    validations: { pincode: undefined },
  });
  
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
    dispatch(viewRestaurantByLocationThunk(state))
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

import { useState } from "react";

const UpdateRestaurant = () => {
  const update = {
    restaurantId: "001",
    restaurantName: "Chawla",
    managerName: "Mayank",
    contactNumber: "9999955555",
  };
  const [state, setState] = useState({
    restaurantId: "",
    restaurantName: "",
    managerName: "",
    contactNumber: "",
    update: undefined,
  });

  const onHandleRestaurantId = (e) => {
    setState({ ...state, restaurantId: e.target.value });
  };
  const onHandleRestaurantName = (e) => {
    setState({ ...state, restaurantName: e.target.value });
  };
  const onHandleManagerName = (e) => {
    setState({ ...state, managerName: e.target.value });
  };
  const onHandleContactNumber = (e) => {
    setState({ ...state, contactNumber: e.target.value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, update: update });
  };
  return (
    <div>
      <h2>Update Restaurant</h2>
      <form onSubmit={onHandleSubmit}>
        <label>Restaurant Id</label>
        <input type="text" onChange={onHandleRestaurantId} />
        <br />
        <label>Restaurant Name</label>
        <input type="text" onChange={onHandleRestaurantName} />
        <br />
        <label>Manager Name</label>
        <input type="text" onChange={onHandleManagerName} />
        <br />
        <label>Contact Number</label>
        <input type="text" onChange={onHandleContactNumber} />
        <br />
        <button>Submit</button>
        <br />
      </form>
      RestaurantId:- {state.restaurantId}
      <br />
      RestaurantName:- {state.restaurantName}
      <br />
      ManagerName:- {state.managerName}
      <br />
      ContactNumber:- {state.contactNumber}
    </div>
  );
};

export default UpdateRestaurant;

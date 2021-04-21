import { useState } from "react";

const DeleteRestaurant = () => {
  const remove = {
    restaurantId: "001"
  };
  const [state, setState] = useState({
    restaurantId: "",
    remove: undefined,
  });

  const onHandleRestaurantId = (e) => {
    setState({ ...state, restaurantId: e.target.value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, remove: remove });
  };
  return (
    <div>
      <h2>Delete Restaurant</h2>
      <form onSubmit={onHandleSubmit}>
        <label>Restaurant Id</label>
        <input type="text" onChange={onHandleRestaurantId} />
        <br />
        <button>Submit</button>
        <br />
      </form>
      RestaurantId:- {state.restaurantId}
    </div>
  );
};

export default DeleteRestaurant;
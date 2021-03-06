import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllRestaurantThunk } from "../../redux/restaurant/viewAllRestaurant/viewAllRestaurantAction";
import { viewRestaurantByIdThunk } from "../../redux/restaurant/viewRestaurantById/viewRestaurantByIdAction";
import DisplayRestaurant from "./DisplayRestaurant";

const ViewRestaurantById = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      restaurant: state.viewRestaurantById.restaurant,
      restaurantList: state.viewAllRestaurant.restaurants,
      error: state.viewRestaurantById.error,
    };
  });

  const [state, setState] = useState({
    restaurantId: "",
  });
  const fetchAllRestaurant = () => {
    dispatch(viewAllRestaurantThunk());
  };
  useEffect(fetchAllRestaurant, []);
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewRestaurantByIdThunk(state));
  };
  return (
    <div className="container-sm">
      <h2>View By Restaurant Id</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Restaurant By Id</label>
          <select
            name="restaurantId"
            onChange={onHandleChange}
            className="form-control"
          >
            <option disabled selected>
              select restaurantId
            </option>
            {response.restaurantList.map((restaurant) => (
              <option
                key={restaurant.restaurantId}
                value={restaurant.restaurantId}
              >
                {restaurant.restaurantName}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
        <br />
      </form>
      {response.restaurant ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Displaying Restaurant</h4>
          <DisplayRestaurant restaurant={response.restaurant} />
        </div>
      ) : (
        ""
      )}
      {response.error ? (
        <div className="alert alert-danger mt-3" role="alert">
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ViewRestaurantById;

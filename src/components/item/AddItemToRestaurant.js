import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToRestaurantThunk } from "../../redux/item/addItemToRestaurant/addItemToRestaurantAction";
import { viewAllItemThunk } from "../../redux/item/viewAllItem/viewAllItemAction";
import { viewAllRestaurantThunk } from "../../redux/restaurant/viewAllRestaurant/viewAllRestaurantAction";


const AddItemToRestaurant = () => {
  const dispatch=useDispatch();
  const response = useSelector((state)=>{
    return{
      restaurant:state.addItemByRestaurant.restaurant,
      restaurantList:state.viewAllRestaurant.restaurants,
      itemList:state.viewAllItem.items,
     error:state.addItemByRestaurant.error
    }
  })
  const [state, setState] = useState({
    itemId: "",
    restaurantId: "",
  });
  
  const fetchAll=()=>
  {dispatch(viewAllRestaurantThunk())
    dispatch(viewAllItemThunk())
  }
  useEffect(fetchAll,[])


  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addItemToRestaurantThunk(state))
   // setState({ ...state });
  };
  return (
    <div className="container-sm">
      <form onSubmit={onSubmit}>
        <h1>Add Item To Restaurant</h1>
        <div className="form-group">
          <label> Resturant </label>
          <select
            name="restaurantId"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Restaurant 
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

        <div className="form-group">
          <label> Item </label>
          <select
            name="itemId"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Item 
            </option>
            {response.itemList.map((item) => (
              <option key={item.itemId} value={item.itemId}>
                {item.itemName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* {response.item ? <DisplayItemDetail item={response.item} /> : ""}
      {response.error ? response.error : ""} */}
    {response.restaurant ?(
        <div class="alert alert-success mt-3" role="alert">
           <p>Item Added Successfully in Restaurant = {response.restaurant.restaurantName}</p>
        </div>
      ) 
   
    : ""}
      {response.error ? (
        <div className="alert alert-danger mt-3" role="alert">
          {response.error}
        </div>
      )  : ""}
    </div>
  );
};

export default AddItemToRestaurant;

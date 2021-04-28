const DisplayRestaurant = ({restaurant}) => {
    return ( 
        <div className="container-sm p-3"> 
              <p>RestaurantId : {restaurant.restaurantId}</p>
              <p>RestaurantName : {restaurant.restaurantName}</p>
              <p>Manager Name : {restaurant.managerName}</p>
              <p>Contact Number : {restaurant.contactNumber}</p>
        </div>
     );
}
 
export default DisplayRestaurant;
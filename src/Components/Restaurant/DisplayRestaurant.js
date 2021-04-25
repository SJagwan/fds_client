const DisplayRestaurant = ({restaurant}) => {
    return ( 
        <div>
              <h2>Displaying Restaurant</h2>
              <p>{restaurant.restaurantId}</p>
              <p>{restaurant.restaurantName}</p>
              <p>{restaurant.managerName}</p>
              <p>{restaurant.contactNumber}</p>
        </div>
     );
}
 
export default DisplayRestaurant;
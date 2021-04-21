const DisplayRestaurant = ({restaurant}) => {
    return ( 
        <div>
              <h2>Displaying Restaurant</h2>
              
              <p>{restaurant.restaurantName}</p>
              <p>{restaurant.managerName}</p>
              <p>{restaurant.area}</p>
        </div>
     );
}
 
export default DisplayRestaurant;
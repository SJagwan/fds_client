import axios from 'axios';
const baseUrl = "http://localhost:8585";


export function addRestaurantResquest(data){
    console.log("-----------Inside Add Restaurant Request----------")
    const url=baseUrl+"/restaurants/addrestaurant";
    const promise=axios.post(url,data);
    return promise;
}

export function viewRestaurantById(restaurantId){
    console.log("-----------Inside View Restaurant Request----------")
    const url=baseUrl+`/restaurants/viewrestaurant/${restaurantId}`;
    const promise=axios.get(url);
    return promise;
}
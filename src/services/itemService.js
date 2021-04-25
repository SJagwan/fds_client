import axios from 'axios';
const baseUrl = "http://localhost:8585";

export function addItemRequest(data){
    console.log("-------- Inside Add Item Request --------")
    const url = baseUrl+("/items/add")
    //const data={};
    const promise=axios.post(url,data);
    return promise;
}
export function addItemToRestaurantRequest(data){
    console.log("-------- Inside Add Item To Restaurant Item Request --------")
    const url = baseUrl+("/items/addtorestaurant")
    //const data={};
    const promise=axios.put(url,data);
    return promise;
}

export function viewItemRequest(data){
    console.log("-------- Inside viewItemRequest --------")
    const id=data.itemId;
    const url = baseUrl+(`/items/view/${id}`)
   
    const promise=axios.get(url);
    return promise;
}
export function viewItembyCategoryRequest(data){
    console.log("-------- Inside viewItembyCategoryRequest --------")
    const id=data.catId;
   const url = baseUrl+(`/items/bycategory/${id}`)
   const promise=axios.get(url);
    return promise; 
}
export function viewItembyNameRequest(data){
    console.log("-------- Inside viewItembyNameRequest--------")
    const name=data.itemName;
    const url = baseUrl+(`/items/byname/${name}`)
    const promise=axios.get(url);
    return promise;
}
import axios from 'axios';
const baseUrl = "http://localhost:8585";


export function addItemToCartRequest(data){
    const url=baseUrl+"foodcart/additemtocart"
    const promise=axios.post(url,data)
    return promise;
}
export function increaseQuantityRequest(data){
    const url=baseUrl+"/foodcart/increasequantity"
    const promise=axios.put(url,data);
    return promise;
}

export function reduceQuantityRequest(data){
    const url=baseUrl+"/foodcart/reducequantity"
    const promise=axios.put(url,data);
    return promise;
}

export function removeItemToCartRequest(data){
    const url=baseUrl+"foodcart/removeitem";
    const promise=axios.delete(url,data)
    return promise;

}
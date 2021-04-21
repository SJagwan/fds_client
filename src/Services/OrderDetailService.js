import axios from 'axios';
const baseUrl = "http://localhost:8585";

export function addOrderRequest(id) {
    console.log("inside add request");
    let url=baseUrl+"/orders/add";
    const data={customerId:id}
    const promise=axios.post(url,data);
    return promise;
}

// export function updateOrderRequest() {
//     let url=baseUrl+"/orders/update";
//     const promise=axios.put(url,data);
//     return promise;
// }
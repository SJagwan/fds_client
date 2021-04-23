import axios from 'axios';
const baseUrl = "http://localhost:8585";

export function addCustomerRequest(data){
    console.log("-----------Inside Add Customer Request----------")

    const url=baseUrl+"/customers/add";
    const promise=axios.post(url,data);
    return promise;
}
export function updateCustomerRequest(data){
    console.log("-----------Inside Update Customer Request----------")

    const url=baseUrl+"/customers/update";
    const promise=axios.post(url,data);
    return promise;
}
export function viewCustomerById(id){
    console.log("-----------Inside View Customer By Id Request----------")
    const url=baseUrl+`/customers/view/${id}`;
    const promise=axios.get(url);
    return promise;
}
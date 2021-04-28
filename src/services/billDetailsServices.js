import axios from 'axios';
const baseUrl = "http://localhost:8585";


export function viewBillByIdRequest(billId){
    console.log("-----------Inside View Bill By Id Request----------")
    const url=baseUrl+`/bills/get/${billId}`;
    const promise=axios.get(url);
    return promise;
}
 export function viewBillByDateRequest(startDate, endDate){
     console.log("-----------Inside View Bill By Date Request----------")
     const url=baseUrl+`/bills/getByDate/${startDate}/${endDate}`;
     const promise=axios.get(url);
     return promise;
}

export function viewAllBillRequest(customerId){
    const url=baseUrl+`/bills/viewbycustomer/${customerId}`;
     const promise=axios.get(url);
     return promise;

}
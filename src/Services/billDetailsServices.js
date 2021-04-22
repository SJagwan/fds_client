import axios from 'axios';
const baseUrl = "http://localhost:8585";


export function viewBillById(billId){
    console.log("-----------Inside View Bill By Id Request----------")
    const url=baseUrl+`/bills/get/${billId}`;
    const promise=axios.get(url);
    return promise;
}
export function ViewBillByDate(billDate){
    console.log("-----------Inside View Bill By Date Request----------")
    const url=baseUrl+`/bills/get/${billId}`;
    const promise=axios.get(url);
    return promise;
}
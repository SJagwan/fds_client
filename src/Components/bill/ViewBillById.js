import { useState } from "react";
import DisplayBill from "./DisplayBill";

const ViewBillById = () => {
    const bill = {
       billId:"123456",
       orderStatus:"Approved",
       totalItem:"5"


      };
    const [state, setState] = useState({
        billId: ""
    
      });
      const billList = [
        { billId: "3624803138" },
        { billId: "9443084071" },
        { billId: "2054398488" },
      ];
      const response ={bill:undefined,error:""}
      const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value });
      };
     
      const onHandleSubmit = (e) => {
        e.preventDefault();
        setState({ ...state});
      };

    return (  
        <div>
            <h2>View By Bill Id</h2>
      <form onSubmit={onHandleSubmit}>
        <label>Bill By Id</label>
        <select name="billId" onChange={onHandleChange}>
          <option disabled selected>
            select billId
          </option>
          {billList.map((bill,index) => (
            <option key={bill.billId} value={bill.billId}>
                {
                 index+1
                }
            </option>
          ))}
        </select>
        <button>Submit</button>
        <br />
      </form>
      {
       response.bill?
       (<DisplayBill bill={response.bill}/>):""
      }
      {
        response.error ? response.error :""
      }
     
        </div>
    );
}
 
export default ViewBillById;
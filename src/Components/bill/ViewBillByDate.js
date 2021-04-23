import { useState } from "react";
import DisplayBillList from "./DisplayBillList";

const ViewBillByDate = () => {
    const billList = {
       billId:"123456",
       orderStatus:"Approved",
       totalItem:"5",
       billDate:"23/4/2021"

      };
    const [state, setState] = useState({
        startDate: "",
        endDate:""
    
      });
      
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
           <h2> View Bill By Date</h2>
      <form onSubmit={onHandleSubmit}>
        <label>StartDate</label>
        <input type="date" name="startDate" onChange={onHandleChange} />
        <label>EndDate</label>
        <input type="date" name="endDate" onChange={onHandleChange} />
        <button>Submit</button>
      </form>
      {
       response.bill?
       (<DisplayBillList billList={response.bill}/>):""
      }
      {
        response.error ? response.error :""
      }
     
        </div>
    );
}
 
export default ViewBillByDate;
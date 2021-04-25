import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewBillByDateThunk } from "../../redux/bill/viewBillByDate/viewBillByDateAction";
import DisplayBillList from "./DisplayBillList";

const ViewBillByDate = () => {
    const dispatch=useDispatch();
    const response=useSelector((state)=>{
        return {
            bill:state.viewBillByDate.bill,
            error:state.viewBillByDate.error
        }
    })

    const [state, setState] = useState({
        startDate: "",
        endDate:""
    
      });
      
      
      const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({ ...state, [name]: value });
      };
     
      const onHandleSubmit = (e) => {
        e.preventDefault();
        dispatch(viewBillByDateThunk(state))
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
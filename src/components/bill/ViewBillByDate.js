import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewBillByDateThunk } from "../../redux/bill/viewBillByDate/viewBillByDateAction";
import DisplayBillList from "./DisplayBillList";

const ViewBillByDate = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      bill: state.viewBillByDate.bill,
      error: state.viewBillByDate.error,
    };
  });

  const [state, setState] = useState({
    startDate: "",
    endDate: "",
  });

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewBillByDateThunk(state));
  };

  return (
    <div className="container-sm">
      <h2> View Bill By Date</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>StartDate</label>
          <input
            className="form-control"
            type="date"
            name="startDate"
            onChange={onHandleChange}
          />
        </div>
        <div className="form-group">
          <label>EndDate</label>
          <input
            className="form-control"
            type="date"
            name="endDate"
            onChange={onHandleChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {response.bill ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Displaying Bill List</h4>
          <DisplayBillList billList={response.bill} />
        </div>
      ) : (
        ""
      )}
      {response.error ? (
        <div className="alert alert-danger mt-3" role="alert">
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ViewBillByDate;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewBillByIdThunk } from "../../redux/bill/viewBillById/viewBillByIdAction";
import DisplayBill from "./DisplayBill";

const ViewBillById = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      bill: state.viewBillById.bill,
      error: state.viewBillById.error,
    };
  });

  const [state, setState] = useState({
    billId: "",
  });
  const billList = [
    { billId: 3624803138 },
    { billId: "9443084071" },
    { billId: "2054398488" },
  ];

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewBillByIdThunk(state));
  };

  return (
    <div className="container-sm">
      <h2>View By Bill Id</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Bill By Id</label>
          <select
            className="form-control"
            name="billId"
            onChange={onHandleChange}
          >
            <option disabled selected>
              select billId
            </option>
            {billList.map((bill, index) => (
              <option key={bill.billId} value={bill.billId}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>

        <button className="btn btn-primary">Submit</button>
        <br />
      </form>
      {response.bill ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Displaying Bill</h4>
          <DisplayBill bill={response.bill} />
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

export default ViewBillById;

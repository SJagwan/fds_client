import { useState } from "react";

const AddBill = () => {
  const add = {
    billId: "1234567",
    
  };
  const [state, setState] = useState({
    billId: "",
    add: undefined,
  });
  const onHandleBillId = (e) => {
    setState({ ...state, billId: e.target.value });
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, add: add });
  };
  return (
    <div>
      <h2>Add Bill</h2>
      <form onSubmit={onHandleSubmit}>
        <label>BillId</label>
        <input type="text" onChange={onHandleBillId} />
        <br />
        <button>Submit</button>
        <br />
      </form>
      BillId:- {state.billId}
      <br />
    </div>
  );
};

export default AddBill;
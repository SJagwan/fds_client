import { useState } from "react";
import DisplayListItemDetail from "./DisplayListItemDetail";
import { useDispatch, useSelector } from "react-redux";
import { viewItemByNameThunk } from "../../redux/item/viewItemByName/viewItemByNameAction";

const ViewItembyName = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      item: state.viewItemByName.item,
      error: state.viewItemByName.error,
    };
  });
  const [state, setState] = useState({ itemName: "" });

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(viewItemByNameThunk(state));
    // setState({...state})
  };
  return (
    <div className="container-sm">
      <h1>View Item By Name</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label> Item Name</label>
          <input
            type="text"
            name="itemName"
            className="form-control"
            onChange={onHandleChange}
            minLength="2"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {response.item ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Item</h4>
          <DisplayListItemDetail itemList={response.item} />
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

export default ViewItembyName;

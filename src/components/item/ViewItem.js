import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllItemThunk } from "../../redux/item/viewAllItem/viewAllItemAction";
import { viewItemThunk } from "../../redux/item/viewItem/viewItemAction";
import DisplayItemDetail from "./DisplayItemDetail";

const ViewItem = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      item: state.viewItem.item,
      itemList: state.viewAllItem.items,
      error: state.viewItem.error,
    };
  });
  const [state, setState] = useState({ itemId: "" });

  const fetchAll = () => {
    dispatch(viewAllItemThunk());
  };
  useEffect(fetchAll, []);

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(viewItemThunk(state));
  };
  return (
    <div className="container-sm">
      <h1> View Item</h1>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label> Item Id</label>
          <select
            name="itemId"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Item Id
            </option>
            {response.itemList.map((item) => (
              <option key={item.itemId} value={item.itemId}>
                {item.itemName}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {response.item ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Item</h4>
          <DisplayItemDetail item={response.item} />
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
export default ViewItem;

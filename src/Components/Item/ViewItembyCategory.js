import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewItemByCategoryThunk } from "../../redux/item/viewItemByCategory/viewItemByCategoryAction";
import DisplayListItemDetail from "./DisplayListItemDetail";

const ViewItembyCategory = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      item: state.viewItemByCategory.item,
      error: state.viewItemByCategory.error,
    };
  });
  const [state, setState] = useState({ catId: "" });

  const categoryList = [
    { catId: "6096426597", name: "SJP" },
    { catId: "7857171300", name: "Hardik" },
    { catId: 3, name: "Food" },
  ];
  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(viewItemByCategoryThunk(state));
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <h1>View Item By Category</h1>

        <div className="form-group">
          <label> Cat Id</label>
          <select
            name="catId"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Category Id
            </option>
            {categoryList.map((category) => (
              <option key={category.catId} value={category.catId}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {response.item ? <DisplayListItemDetail itemList={response.item} /> : ""}
      {response.error ? response.error : ""}
    </div>
  );
};

export default ViewItembyCategory;

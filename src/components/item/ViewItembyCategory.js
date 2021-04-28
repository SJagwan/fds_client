import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewItemByCategoryThunk } from "../../redux/item/viewItemByCategory/viewItemByCategoryAction";
import { viewAllCategoryThunk } from "../../redux/category/viewAllCategory/viewAllCategoryAction";
import DisplayListItemDetail from "./DisplayListItemDetail";

const ViewItembyCategory = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      item: state.viewItemByCategory.item,
      categoryList: state.viewAllCategory.categories,
      error: state.viewItemByCategory.error,
    };
  });
  const [state, setState] = useState({ catId: "" });

  const fetchAll = () => {
    dispatch(viewAllCategoryThunk());
  };
  useEffect(fetchAll, []);

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
    <div className="container-sm">
      <form onSubmit={onSubmit}>
        <h1>View Item By Category</h1>

        <div className="form-group">
          <label> Cat </label>
          <select
            name="catId"
            className="form-control"
            onChange={onHandleChange}
          >
            <option disabled selected>
              Select Category
            </option>
            {response.categoryList.map((category) => (
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

export default ViewItembyCategory;

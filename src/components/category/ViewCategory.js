import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllCategoryThunk } from "../../redux/category/viewAllCategory/viewAllCategoryAction";
import { viewCategoryThunk } from "../../redux/category/viewCategory/viewCategoryAction";
import DisplayCategory from "./DisplayCategory";

const ViewCategory = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      categoryList: state.viewAllCategory.categories,
      category: state.viewCategory.category,
      error: state.viewCategory.error,
    };
  });

  const fetchAllCategory = () => {
    dispatch(viewAllCategoryThunk());
  };

  useEffect(fetchAllCategory, []);

  const [state, setState] = useState({ id: "" });

  const onHandleId = (e) => {
    setState({ ...state, id: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewCategoryThunk(state));
  };

  return (
    <div className="container-sm">
      <h2>View Category</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Id</label>
          <select
            id="categoryId"
            className="form-control"
            onChange={onHandleId}
          >
            <option disabled selected>
              select id
            </option>
            {response.categoryList.map((category) => (
              <option key={category.catId} value={category.catId}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {response.category ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Displaying Category</h4>
          <DisplayCategory category={response.category} />
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

export default ViewCategory;

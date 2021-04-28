import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategoryThunk } from "../../redux/category/addCategory/addCategoryAction";
import DisplayCategory from "./DisplayCategory";

const AddCategory = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      category: state.addCategory.category,
      error: state.addCategory.error,
    };
  });

  const [state, setState] = useState({ name: "" });

  const onHandleName = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategoryThunk(state));
  };

  return (
    <div className="container-sm">
      <h2>Add Category</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" onChange={onHandleName} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>

      {response.category ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display Added Category</h4>
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

export default AddCategory;

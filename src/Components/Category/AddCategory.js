import { useState } from "react";
import DisplayCategory from "./DisplayCategory";

const AddCategory = () => {
  const category = {
    catId: "1",
    name: "AddCategory",
  };

  const [state, setState] = useState({ name: "" });
  const response = { category: undefined, error: "error occurred" };

  const onHandleName = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, category: category });
  };

  return (
    <div className="container">
      <h2>Add Category</h2>
      <form onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" onChange={onHandleName} />
        </div>
        <button>Submit</button>
      </form>

      {response.category ? (
        <DisplayCategory category={response.category} />
      ) : (
        ""
      )}

      {response.error ? response.error : ""}
    </div>
  );
};

export default AddCategory;

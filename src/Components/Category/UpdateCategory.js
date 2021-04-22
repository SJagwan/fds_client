import { useState } from "react";
import DisplayCategory from "./DisplayCategory";

const UpdateCategory = () => {
  const category = {
    id: "1",
    name: "UpdateCategory",
  };

  const categoryList = [
    { id: 1, name: "SJ" },
    { id: 2, name: "Hardik" },
    { id: 3, name: "O4ASJ" },
  ];

  const [state, setState] = useState({ name: "", id: ""});

  const response = { category : undefined, error : "error occurred"}

  const onHandleName = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const onHandleId = (e) => {
    setState({ ...state, id: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, category: category });
  };

  return (
    <div className="container">
      <h2>Update Category</h2>
      <form onSubmit={onHandleSubmit}>
      <div className="form-group">
        <label>Id</label>
        <select id="categoryId" className = "form-control" onChange={onHandleId}>
          <option disabled selected>
            select id
          </option>
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        </div>
        <div className="form-group">
        <label>Name</label>
        <input type="text" className = "form-control" onChange={onHandleName} />
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

export default UpdateCategory;

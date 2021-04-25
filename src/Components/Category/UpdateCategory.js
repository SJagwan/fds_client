import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoryThunk } from "../../redux/category/updateCategory/updateCategoryAction";
import DisplayCategory from "./DisplayCategory";

const UpdateCategory = () => {
  const dispatch = useDispatch();
  const response = useSelector((state)=>{
      return{
          category:state.updateCategory.category,
          error:state.updateCategory.error
      }
  })
 

  const categoryList = [
    { id: 1996889084, name: "SJ" },
    { id: 2, name: "Hardik" },
    { id: 3, name: "O4ASJ" },
  ];

  const [state, setState] = useState({ name: "", id: ""});



  const onHandleName = (e) => {
    setState({ ...state, name: e.target.value });
  };

  const onHandleId = (e) => {
    setState({ ...state, id: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategoryThunk(state))
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
        <button className="btn btn-primary">Submit</button>
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

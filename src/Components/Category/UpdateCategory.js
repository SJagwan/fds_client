import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllCategoryThunk } from "../../redux/category/viewAllCategory/viewAllCategoryAction";
import { updateCategoryThunk } from "../../redux/category/updateCategory/updateCategoryAction";
import DisplayCategory from "./DisplayCategory";

const UpdateCategory = () => {
  const dispatch = useDispatch();
  const response = useSelector((state)=>{
      return{
        categoryList: state.viewAllCategory.categories,
          category:state.updateCategory.category,
          error:state.updateCategory.error
      }
  })

  const fetchAllCategory = () => {
    dispatch(viewAllCategoryThunk());
  };

  useEffect(fetchAllCategory, []);
 

  

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
        <select id="catId" className = "form-control" onChange={onHandleId}>
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

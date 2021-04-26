import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllCategoryThunk } from "../../redux1/category/viewAllCategory/viewAllCategoryAction";
import { viewCategoryThunk } from "../../redux1/category/viewCategory/viewCategoryAction";
import DisplayCategory from "./DisplayCategory";

const ViewCategory = () => {
  const dispatch = useDispatch();
  const response = useSelector((state)=>{
      return{
        categoryList: state.viewAllCategory.categories,
          category:state.viewCategory.category,
          error:state.viewCategory.error
      }
  })

  const fetchAllCategory = () => {
    dispatch(viewAllCategoryThunk());
  };

  useEffect(fetchAllCategory, []);
  

 

  const [state, setState] = useState({ id: ""});
 

  const onHandleId = (e) => {
    setState({ ...state, id: e.target.value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(viewCategoryThunk(state));
   
  };

  return (
    <div className="container">
      <h2>View Category</h2>
      <form onSubmit={onHandleSubmit}>
      <div className="form-group">
        <label>Id</label>
        <select id="categoryId" className = "form-control" onChange={onHandleId}>
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
        <DisplayCategory category={response.category} />
      ) : (
        ""
      )}

      {response.error ? response.error : ""}
    </div>
  );
};

export default ViewCategory;

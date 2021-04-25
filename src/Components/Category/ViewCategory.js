import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewCategoryThunk } from "../../redux/category/viewCategory/viewCategoryAction";
import DisplayCategory from "./DisplayCategory";

const ViewCategory = () => {
  const dispatch = useDispatch();
  const response = useSelector((state)=>{
      return{
          category:state.viewCategory.category,
          error:state.viewCategory.error
      }
  })
  

  const categoryList = [
    { id: "7091097141", name: "chips" },
    { id: "2", name: "Hardik" },
    { id: "3", name: "O4ASJ" },
  ];

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
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
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

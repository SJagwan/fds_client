import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewAllCategoryThunk } from "../../redux/category/viewAllCategory/viewAllCategoryAction";
import DisplayListCategory from "./DisplayListCategory";

const ViewAllCategory = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      category: state.viewAllCategory.categories,
      error: state.viewAllCategory.error,
    };
  });

  const fetchAllCategory = () => {
    dispatch(viewAllCategoryThunk());
  };

  useEffect(fetchAllCategory, []);
  return (
    <div className="container-sm">
      {response.category ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Displaying Category List</h4>
          <DisplayListCategory categoryList={response.category} />
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

export default ViewAllCategory;

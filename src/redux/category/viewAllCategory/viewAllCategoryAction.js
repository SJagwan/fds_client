import { viewAllCategoryRequest } from "../../../services/categoryService";
import { viewAllCategoryConstant } from "./viewAllCategoryConstant";

export const viewAllCategoryStart = () => ({
  type: viewAllCategoryConstant.Start,
  payload: undefined,
  error: undefined,
});

export const viewAllCategorySuccess = (data) => ({
  type: viewAllCategoryConstant.Success,
  payload: data,
  error: undefined,
});

export const viewAllCategoryFailure = (error) => ({
  type: viewAllCategoryConstant.Failure,
  payload: undefined,
  error: error,
});

export const viewAllCategoryThunk = () => {
  return (dispatch) => {
    let objAction = viewAllCategoryStart();
    dispatch(objAction);
    const promise = viewAllCategoryRequest();
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = viewAllCategorySuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = viewAllCategoryFailure(error.response.data);
        dispatch(objActionFailure);
      });
  };
};

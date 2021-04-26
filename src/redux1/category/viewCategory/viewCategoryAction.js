import { viewCategoryRequest } from "../../../services/categoryService";
import { viewCategoryConstant } from "./viewCategoryConstant";

export const viewCategoryStart = () => ({
  type: viewCategoryConstant.Start,
  payload: undefined,
  error: undefined,
});

export const viewCategorySuccess = (data) => ({
  type: viewCategoryConstant.Success,
  payload: data,
  error: undefined,
});

export const viewCategoryFailure = (error) => ({
  type: viewCategoryConstant.Failure,
  payload: undefined,
  error: error,
});

export const viewCategoryThunk = (data) => {
  return (dispatch) => {
    let objAction = viewCategoryStart();
    dispatch(objAction);
    const promise = viewCategoryRequest(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = viewCategorySuccess(response.data)
        dispatch(objActionSuccess)
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.response.data);
        let objActionFailure = viewCategoryFailure(error.response.data)
        dispatch(objActionFailure)
      });
  };
};
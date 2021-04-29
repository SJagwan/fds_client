import { addCategoryRequest } from "../../../services/categoryService";
import { addCategoryConstant } from "./addCategoryConstant";

export const addCategoryStart = () => ({
  type: addCategoryConstant.Start,
  payload: undefined,
  error: undefined,
});

export const addCategorySuccess = (data) => ({
  type: addCategoryConstant.Success,
  payload: data,
  error: undefined,
});

export const addCategoryFailure = (error) => ({
  type: addCategoryConstant.Failure,
  payload: undefined,
  error: error,
});

export const addCategoryThunk = (data) => {
  return (dispatch) => {
    const objAction = addCategoryStart();
    dispatch(objAction);
    const promise = addCategoryRequest(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = addCategorySuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        let objActionFailure = addCategoryFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};

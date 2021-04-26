import { updateCategoryRequest } from "../../../services/categoryService";
import { updateCategoryConstant } from "./updateCategoryConstant";

export const updateCategoryStart = () => ({
  type: updateCategoryConstant.Start,
  payload: undefined,
  error: undefined,
});

export const updateCategorySuccess = (data) => ({
  type: updateCategoryConstant.Success,
  payload: data,
  error: undefined,
});

export const updateCategoryFailure = (error) => ({
  type: updateCategoryConstant.Failure,
  payload: undefined,
  error: error,
});

export const updateCategoryThunk = (data) => {
  return (dispatch) => {
    let objAction = updateCategoryStart();
    dispatch(objAction);
    const promise = updateCategoryRequest(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = updateCategorySuccess(response.data)
        dispatch(objActionSuccess)
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.response.data);
        let objActionFailure = updateCategoryFailure(error.response.data)
        dispatch(objActionFailure)
      });
  };
};

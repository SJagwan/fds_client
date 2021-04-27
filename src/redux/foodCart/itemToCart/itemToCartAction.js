import {
  increaseQuantityRequest,
  reduceQuantityRequest,
} from "../../../services/foodCartService";
import { itemToCartConstant } from "./itemToCartConstant";

export const itemToCartStart = () => ({
  type: itemToCartConstant.Start,
  payload: undefined,
  error: undefined,
});

export const itemToCartSuccess = (data) => ({
  type: itemToCartConstant.Success,
  payload: data,
  error: undefined,
});

export const itemToCartFailure = (error) => ({
  type: itemToCartConstant.Failure,
  payload: undefined,
  error: error,
});

export const itemToCartStartReduce = () => ({
  type: itemToCartConstant.Start_Reduce,
  payload: undefined,
  error: undefined,
});

export const itemToCartSuccessReduce = (data) => ({
  type: itemToCartConstant.Success_Reduce,
  payload: data,
  error: undefined,
});

export const itemToCartFailureReduce = (error) => ({
  type: itemToCartConstant.Failure_Reduce,
  payload: undefined,
  error: error,
});

export const Empty_Cart_Action = () => ({
  type: itemToCartConstant.Empty_Cart,
  payload: undefined,
  error: undefined,
});

export const itemToCartIncreaseThunk = (data) => {
  return (dispatch) => {
    const objAction = itemToCartStart();
    dispatch(objAction);
    const promise = increaseQuantityRequest(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = itemToCartSuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.response.data);
        let objActionFailure = itemToCartFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};

export const itemToCartReduceThunk = (data) => {
  return (dispatch) => {
    const objAction = itemToCartStartReduce();
    dispatch(objAction);
    const promise = reduceQuantityRequest(data);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = itemToCartSuccessReduce(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.response.data);
        let objActionFailure = itemToCartFailureReduce(error.response.data);
        dispatch(objActionFailure);
      });
  };
};

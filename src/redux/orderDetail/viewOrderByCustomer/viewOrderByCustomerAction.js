import { viewOrderByCustomerIdRequest} from "../../../services/OrderDetailService";
import { viewOrderByCustomerIdConstant } from "./viewOrderByCustomerConstant";

export const viewOrderByCustomerStart = () => ({
  type: viewOrderByCustomerIdConstant.Start,
  payload: undefined,
  error: undefined,
});

export const viewOrderByCustomerSuccess = (data) => ({
  type: viewOrderByCustomerIdConstant.Success,
  payload: data,
  error: undefined,
});

export const viewOrderByCustomerFailure = (error) => ({
  type: viewOrderByCustomerIdConstant.Failure,
  payload: undefined,
  error: error,
});

export const viewOrderByCustomerThunk = (customerId) => {
  return (dispatch) => {
    const objAction = viewOrderByCustomerStart();
    dispatch(objAction);
    const promise = viewOrderByCustomerIdRequest(customerId);
    promise
      .then((response) => {
        console.log(response.data);
        let objActionSuccess = viewOrderByCustomerSuccess(response.data);
        dispatch(objActionSuccess);
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.response.data);
        let objActionFailure = viewOrderByCustomerFailure(error.message);
        dispatch(objActionFailure);
      });
  };
};

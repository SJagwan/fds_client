import { updateCustomerRequest } from "../../../services/customerService";
import { updateCustomerConstant } from "./updateCustomerConstant";

export const updateCustomerStart=()=>({
    type:updateCustomerConstant.Fetch_Update_Customer_Start,
    payload:undefined,
    error:undefined
})

export const updateCustomerSuccess=(data)=>({
    type:updateCustomerConstant.Fetch_Update_Customer_Success,
    payload:data,
    error:undefined
})

export const updateCustomerFailure=(error)=>({
    type:updateCustomerConstant.Fetch_Update_Customer_Failure,
    payload:undefined,
    error:error
})
export const updateCustomerThunk=(state)=>{
    return (dispatch)=>{
        const objAction=updateCustomerStart();
        dispatch(objAction)
        const data={
            id:"1355009585",
            firstName:state.firstName,
            lastName:state.lastName,
            gender:state.gender,
            age:state.age,
            email:state.email,
            mobileNumber:state.mobileNumber,
            area:state.area,
            pincode:state.pincode,
            buildingName:state.buildingName
          }
        const promise=updateCustomerRequest(data);
        promise.then((response)=>{
        console.log(response.data);
        let objActionsuccess=updateCustomerSuccess(response.data);
        dispatch(objActionsuccess)
    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
      let objActionFailure= updateCustomerFailure(error.response.data);
      dispatch(objActionFailure);
    })
    }
}
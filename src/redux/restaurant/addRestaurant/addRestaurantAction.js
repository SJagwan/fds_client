import { addRestaurantResquest } from "../../../services/restaurantService";
import { addRestaurantConstant } from "./addRestaurantConstant";

export const addRestaurantStart=()=>({
    type:addRestaurantConstant.Start,
    payload:undefined,
    error:undefined
})

export const addRestaurantSuccess=(data)=>({
    type:addRestaurantConstant.Success,
    payload:data,
    error:undefined,
})

export const addRestaurantFailure=(error)=>({
    type:addRestaurantConstant.Failure,
    payload:undefined,
    error:error
})

export const addRestaurantThunk=(state)=>{
    return(dispatch)=>{
        const objAction=addRestaurantStart();
        dispatch(objAction)
        const data={
            restaurantName:state.restaurantName,
            managerName:state.managerName,
            contactNumber:state.contactNumber,
            buildingName:state.buildingName,
            area:state.area,
            streetNo:state.streetNo,
            city:state.city,
            state:state.state,
            country:state.country,
            pincode:state.pincode
          }


        const promise=addRestaurantResquest(data);
    promise.then((response)=>{
      console.log(response.data);
      let objActionSuccess=addRestaurantSuccess(response.data);
      dispatch(objActionSuccess)

    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
      let objActionFailure=addRestaurantFailure(error.message);
      dispatch(objActionFailure);
    })
    }
}
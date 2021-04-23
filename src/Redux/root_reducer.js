import { combineReducers } from "redux";
import { viewBillByIdReducer } from "./bill/viewBillById/viewBillByIdReducer";


export const rootReducer=combineReducers({
     viewBillById : viewBillByIdReducer
})
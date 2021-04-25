import { combineReducers } from "redux";
import { viewBillByDateReducer } from "./bill/viewBillByDate/viewBillByDateReducer";
import { viewBillByIdReducer } from "./bill/viewBillById/viewBillByIdReducer";


export const rootReducer=combineReducers({
     viewBillById : viewBillByIdReducer,
     viewBillByDate: viewBillByDateReducer
})
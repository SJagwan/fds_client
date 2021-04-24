import { useState } from "react";
import DisplayCustomerDetails from "./DisplayCustomerDetail";

const ViewCustomerDetail = () => {

    const customer={
      customerId:"007",
      firstName:"Vijay",
      lastName:"san",
      gender:"male"
    }
      
    const response={customerDetail:customer, error:""}
    const onHandleSubmit=(e)=>{
        e.preventDefault();

    }
    return ( 
        <div className="container">
            <h2>View Customer Request</h2>
            {
               response.customerDetail? (<DisplayCustomerDetails customer={response.customerDetail}/>) :""
           }
           {
               response.error? response.error:""
           }

        </div>
        

     );
}
 
export default ViewCustomerDetail;
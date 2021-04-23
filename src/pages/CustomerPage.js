import AddCustomerDetail from "../components/customer/AddCustomerDetail";
import UpdateCustomerDetail from "../components/customer/UpdateCustomerDetail";
import ViewCustomerDetail from "../components/customer/ViewCustomerDetail";

const CustomerPage = () => {
    return ( 
        <div>
            {<AddCustomerDetail/>}
            {<UpdateCustomerDetail/>}
            {<ViewCustomerDetail/>}
        </div>
     );
}
 
export default CustomerPage;
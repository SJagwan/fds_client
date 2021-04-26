import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewCustomerThunk } from "../../redux/customer/viewCustomer/viewCustomerAction";
import DisplayCustomerDetails from "./DisplayCustomerDetail";

const ViewCustomerDetail = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => {
    return {
      customer: state.viewCustomer.customer,
      error: state.viewCustomer.error,
    };
  });
  const fetchCustomer = () => {
    const id = "1355009585";
    dispatch(viewCustomerThunk(id));
  };
  useEffect(fetchCustomer, []);
  return (
    <div className="container">
      <h2>View Customer Request</h2>
      {response.customer ? (
        <DisplayCustomerDetails customer={response.customer} />
      ) : (
        ""
      )}
      {response.error ? response.error : ""}
    </div>
  );
};

export default ViewCustomerDetail;

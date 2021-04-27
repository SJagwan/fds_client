import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewOrderByCustomerThunk } from "../../redux/orderDetail/viewOrderByCustomer/viewOrderByCustomerAction";
import DisplayListOrderDetail from "./DisplayListOrderDetail";
const ViewOrderDetailByCustomer = () => {
  const dispatch = useDispatch();

  const response = useSelector((state) => {
    return {
      orderList: state.viewOrderByCustomer.orderDetails,
      error: state.viewOrderByCustomer.error,
    };
  });

  const fetchAllOrderByCustomerId = () => {
    const customerId = "6336384094";
    dispatch(viewOrderByCustomerThunk(customerId));
  };

  useEffect(fetchAllOrderByCustomerId, []);

  return (
    <div className="container-sm">
      <h2>View Order Detail By Customer Name</h2>
      {response.orderList ? (
        <div className="container p-3 my-3 bg-dark text-white">
          <h4>Display All Orders</h4>
          <DisplayListOrderDetail orderList={response.orderList} />
        </div>
      ) : (
        ""
      )}
      {response.error ? (
        <div className="alert alert-danger mt-3" role="alert">
          {response.error}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ViewOrderDetailByCustomer;

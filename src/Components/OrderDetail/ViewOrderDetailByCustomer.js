import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewOrderByCustomerThunk } from "../../redux/orderDetail/viewOrderByCustomer/viewOrderByCustomerAction";
import DisplayListOrderDetail from "./DisplayListOrderDetail";
const ViewOrderDetailByCustomer = () => {
  const dispatch=useDispatch();

  const response=useSelector((state)=>{
    return{
      orderList:state.viewOrderByCustomer.orderDetails,
      error:state.viewOrderByCustomer.error
    }
  })

  const fetchAllOrderByCustomerId=()=>{
    const customerId="3180122623";
    dispatch(viewOrderByCustomerThunk(customerId))
  }

  useEffect(fetchAllOrderByCustomerId,[]);

  return (
    <div className="container">
      <h2>View Order Detail By Customer Name</h2>
      {response.orderList ? (
        <DisplayListOrderDetail orderList={response.orderList} />
      ) : (
        ""
      )}
      {response.error ? response.error : ""}
    </div>
  );
};

export default ViewOrderDetailByCustomer;

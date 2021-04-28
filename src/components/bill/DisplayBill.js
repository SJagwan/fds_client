const DisplayBill = ({bill}) => {
    return ( 
        <div className="container-sm p-3">     
              <p>BillId : {bill.billId}</p>
              <p>OrderStatus : {bill.orderStatus}</p>
              <p>Total Item : {bill.totalItem}</p>
              <p>Total Cost : {bill.totalCost}</p>
              <p>Date : {bill.billDate}</p>
        </div>
     );
}
 
export default DisplayBill;
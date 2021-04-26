const DisplayBill = ({bill}) => {
    return ( 
        <div>
              <h2>Displaying Bill</h2>
              
              <p>{bill.billId}</p>
              <p>{bill.orderStatus}</p>
              <p>{bill.totalItem}</p>
        </div>
     );
}
 
export default DisplayBill;
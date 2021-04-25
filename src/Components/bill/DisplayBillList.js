import DisplayBill from "./DisplayBill";

const DisplayBillList = ({billList}) => {
    return ( 
        <div>
              {
                billList.map((bill)=> <div key={bill.billId}> <DisplayBill bill={bill}/></div>)
            }
        </div>
     );
}
 
export default DisplayBillList;
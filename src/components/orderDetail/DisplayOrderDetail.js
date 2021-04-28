const DisplayOrderDetail = ({order}) => {
    return ( 
        <div className="container-sm p-3">
            <p>OrderId : {order.orderId}</p>
            <p>CustomerId : {order.customerId}</p>
            <p>FirstName : {order.firstName}</p>
            <p>OrderDate : {order.orderDate}</p>
            <p>OrderStatus :{order.orderStatus}</p>
            <h6>Items</h6>
            {order.itemName.map((item,index)=>
            <p>{index+1} : {item}</p>)}
        </div>
     );
}
 
export default DisplayOrderDetail;
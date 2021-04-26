const DisplayOrderDetail = ({order}) => {
    return ( 
        <div>
            <h1>Displaying Order Details</h1>
            <p>{order.orderId}</p>
            <p>{order.customerId}</p>
            <p>{order.firstName}</p>
        </div>
     );
}
 
export default DisplayOrderDetail;
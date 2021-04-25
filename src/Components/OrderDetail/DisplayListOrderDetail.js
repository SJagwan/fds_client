import DisplayOrderDetail from "./DisplayOrderDetail"

const DisplayListOrderDetail = ({orderList}) => {
    return ( 
        <div>
            {
                orderList.map((order)=> (<DisplayOrderDetail key={order.orderId} order={order}/>))
            }
        </div>
     );
}
 
export default DisplayListOrderDetail;
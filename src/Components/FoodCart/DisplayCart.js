const DisplayCart = ({cart}) => {
    return ( 
        <div className="container">
            <h4>Displaying Cart</h4>
            <p>{cart.customerId}</p>
            <p>{cart.firstName}</p>
            <h6>Items</h6>
            {cart.items.map((item)=>
                <p key={item.itemId}>{item.itemName}</p>
            )}

        </div>
     );
}
 
export default DisplayCart;
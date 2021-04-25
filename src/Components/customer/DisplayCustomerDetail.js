const DisplayCustomerDetails = ({customer}) => {
    return ( 
        <div>
            <h1>Display Customer Details</h1>
            <p>{customer.customerId}</p>
            <p>{customer.firstName}</p>
            <p>{customer.lastName}</p>
            <p>{customer.gender}</p>
        </div>
     );
}
 
export default DisplayCustomerDetails;

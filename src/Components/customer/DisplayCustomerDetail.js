const DisplayCustomerDetails = ({customer}) => {
    return ( 
        <div>
            <h1>Display Customer Details</h1>
            <p>{customer.id}</p>
            <p>{customer.firstName}</p>
            <p>{customer.lastName}</p>
            <p>{customer.age}</p>
        </div>
     );
}
 
export default DisplayCustomerDetails;

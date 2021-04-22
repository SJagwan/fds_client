const DisplayListCustomerDetail = ({customerList}) => {
    return ( 
        <div>
            {
            customerList.map((customer)=> <DisplayListCustomerDetail customer={customer}/>)
            }  
        </div>
     );
}
 
export default DisplayListCustomerDetail;
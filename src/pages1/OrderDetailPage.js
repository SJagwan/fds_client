import {  Route, Switch } from "react-router-dom";
import UpdateOrderDetail from "../components/orderDetail/UpdateOrderDetail"
import ViewOrderDetail from "../components/orderDetail/ViewOrderDetail"
import ViewOrderDetailByCustomer from "../components/orderDetail/ViewOrderDetailByCustomer"
import './page.css';

const OrderDetailPage = (props) => {
    return ( 

        <div>
        <div className="container">
          <div className="page">
            <div className="pageButton">
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/view`)}>View</button>
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/update`)}>Update</button>
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/viewbycustomer`)}>ViewByCustomer</button>
            </div>
            <div className="pageLine"></div>
            <div className="pageContainer">
              <Switch>
                <Route
                  exact
                  path={`${props.match.url}/view`}
                  component={ViewOrderDetail}
                />
                <Route
                  exact
                  path={`${props.match.url}/update`}
                  component={UpdateOrderDetail}
                />
                <Route
                  exact
                  path={`${props.match.url}/viewbycustomer`}
                  component={ViewOrderDetailByCustomer}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
        // <div>
        //     <UpdateOrderDetail/> 
           
        //     <ViewOrderDetail/>
        //     <ViewOrderDetailByCustomer/>
        // </div>
     );
}
 
export default OrderDetailPage;
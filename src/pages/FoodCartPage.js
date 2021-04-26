import AddItemToCart from "../components/foodCart/AddItemToCart";
import AddOrRemoveItemFromCart from "../components/foodCart/AddOrRemoveItemFromCart"
import { Route, Switch } from "react-router-dom";
import './page.css';

const FoodCartPage = (props) => {
    return ( 
        <div>
      <div className="container">
        <div className="page">
          <div className="pageButton">
              <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/addItem`)}>AddItem</button>
              <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/cart`)}>Cart</button>
          </div>
          <div className="pageLine"></div>
          <div className="pageContainer">
            <Switch>
              <Route
                exact
                path={`${props.match.url}/addItem`}
                component={AddItemToCart}
              />
              <Route
                exact
                path={`${props.match.url}/cart`}
                component={AddOrRemoveItemFromCart}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
        // <div>
        //     <AddItemToCart/>
        //     <AddOrRemoveItemFromCart/>
        // </div>
     );
}
 
export default FoodCartPage;
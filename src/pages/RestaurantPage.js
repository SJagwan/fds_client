import AddRestaurant from "../components/restaurant/AddRestaurant";
import ViewByLocationRestaurant from "../components/restaurant/ViewByLocationRestaurant";
import ViewRestaurantById from "../components/restaurant/ViewRestaurantById";
import {  Route, Switch } from "react-router-dom";
import './page.css';

const RestaurantPage = (props) => {
    return ( 
        <div>
        <div className="container">
          <div className="page">
            <div className="pageButton">
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/add`)}>Add</button>
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/view`)}>View</button>
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/viewbylocation`)}>ViewByLocation</button>
            </div>
            <div className="pageLine"></div>
            <div className="pageContainer">
              <Switch>
                <Route
                  exact
                  path={`${props.match.url}/add`}
                  component={AddRestaurant}
                />
                <Route
                  exact
                  path={`${props.match.url}/view`}
                  component={ViewRestaurantById}
                />
                <Route
                  exact
                  path={`${props.match.url}/viewbylocation`}
                  component={ViewByLocationRestaurant}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default RestaurantPage;
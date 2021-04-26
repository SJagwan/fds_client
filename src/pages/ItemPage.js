import AddItem from "../components/item/AddItem";
import AddItemToRestaurant from "../components/item/AddItemToRestaurant";
import ViewItem from "../components/item/ViewItem";
import ViewItembyCategory from "../components/item/ViewItembyCategory";
import ViewItembyName from "../components/item/ViewItembyName";
import { Route, Switch } from "react-router-dom";
import './page.css';

const ItemPage = (props) => {
  return (
    <div>
      <div className="container">
        <div className="page">
          <div className="pageButton">
            <button
            className="btn btn-outline-dark"
              onClick={() => props.history.push(`${props.match.url}/additem`)}
            >
              Add
            </button>
            <button
            className="btn btn-outline-dark"
              onClick={() =>
                props.history.push(`${props.match.url}/additemtorestaurant`)
              }
            >
              AddItemToRestaurant
            </button>
            <button
            className="btn btn-outline-dark"
              onClick={() => props.history.push(`${props.match.url}/view`)}
            >
              View
            </button>
            <button
            className="btn btn-outline-dark"
              onClick={() =>
                props.history.push(`${props.match.url}/viewbycategory`)
              }
            >
              viewByCategory
            </button>
            <button
            className="btn btn-outline-dark"
              onClick={() =>
                props.history.push(`${props.match.url}/viewbyname`)
              }
            >
              viewByName
            </button>
          </div>
          <div className="pageLine"></div>
          <div className="pageContainer">
            <Switch>
              <Route
                exact
                path={`${props.match.url}/additem`}
                component={AddItem}
              />
              <Route
                exact
                path={`${props.match.url}/additemtorestaurant`}
                component={AddItemToRestaurant}
              />
              <Route
                exact
                path={`${props.match.url}/view`}
                component={ViewItem}
              />
              <Route
                exact
                path={`${props.match.url}/viewbycategory`}
                component={ViewItembyCategory}
              />
              <Route
                exact
                path={`${props.match.url}/viewbyname`}
                component={ViewItembyName}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

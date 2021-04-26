import React from "react";
import "./App.css";
import Nav from "./components/Nav";

import CategoryPage from "./pages/CategoryPage";
import CustomerPage from "./pages/CustomerPage";
import BillPage from "./pages/BillPage";
import RestaurantPage from "./pages/RestaurantPage";
import FoodCartPage from "./pages/FoodCartPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import ItemPage from "./pages/ItemPage";
import Home from "./components/Home";
import { Route, Switch } from "react-router";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/customer" component={CustomerPage} />
          <Route  path="/restaurant" component={RestaurantPage} />
          <Route  path="/category" component={CategoryPage} />
          <Route  path="/item" component={ItemPage} />
          <Route  path="/cart" component={FoodCartPage} />
          <Route  path="/order" component={OrderDetailPage} />
          <Route  path="/bill" component={BillPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';
import Nav from './components/Nav'

import BillPage from './pages/BillPage'
import RestaurantPage from './pages/RestaurantPage';
import FoodCartPage from './pages/FoodCartPage';
import OrderDetailPage from './pages/OrderDetailPage';
import ItemPage from "./pages/ItemPage";


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <RestaurantPage/>
        <OrderDetailPage/>
        <FoodCartPage/>
        <ItemPage />
        <BillPage/>
      </div>
    );
  }
}

export default App;

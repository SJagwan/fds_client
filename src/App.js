import React from 'react';
import './App.css';
import Nav from './components/Nav'
import RestaurantPage from './pages/RestaurantPage';
import FoodCartPage from './pages/FoodCartPage';
import OrderDetailPage from './pages/OrderDetailPage';



class App extends React.Component {
  render() {
   
    return (
      <div>
        <Nav />
        <RestaurantPage/>
        <OrderDetailPage/>
        <FoodCartPage/>
      
      </div>

    );

  }

}

export default App;

import React from 'react';
import './App.css';
import Nav from './components/Nav'
import FoodCartPage from './pages/FoodCartPage';
import OrderDetailPage from './pages/OrderDetailPage';


class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <OrderDetailPage/>
        <FoodCartPage/>
      </div>

    );

  }

}

export default App;

import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import FoodCartPage from './Pages/FoodCartPage';
import OrderDetailPage from './Pages/OrderDetailPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <OrderDetailPage/>
        {/* <FoodCartPage/> */}

      </div>

    );

  }

}

export default App;

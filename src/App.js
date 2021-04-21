import React from 'react';
import './App.css';
import Nav from './Components/Nav'

import { Form, Button } from 'react-bootstrap'
import RestaurantPage from './Pages/RestaurantPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <RestaurantPage/>

      </div>

    );

  }

}

export default App;

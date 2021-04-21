import React from 'react';
import './App.css';
import Nav from './components/Nav'

import { Form, Button } from 'react-bootstrap'
import RestaurantPage from './pages/RestaurantPage';

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

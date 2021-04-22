import React from 'react';
import './App.css';
import Nav from './components/Nav'

import { Form, Button } from 'react-bootstrap'
import CustomerPage from './pages/CustomerPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <CustomerPage/>
      </div>

    );

  }

}

export default App;

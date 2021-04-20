import React from 'react';
import './App.css';
import Nav from './Components/Nav'

import { Form, Button } from 'react-bootstrap'
import BillPage from './Pages/BillPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <BillPage/>

      </div>

    );

  }

}

export default App;

import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import { Form, Button } from 'react-bootstrap'
import ItemPage from './Pages/ItemPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <ItemPage/>
      </div>

    );

  }

}

export default App;

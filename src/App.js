import React from 'react';
import './App.css';
import Nav from './Components/Nav'

import { Form, Button } from 'react-bootstrap'
import CategoryPage from './Pages/CategoryPage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <CategoryPage/>

      </div>

    );

  }

}

export default App;

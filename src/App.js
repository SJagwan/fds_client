import React from 'react';
import './App.css';
import Nav from './components/Nav'

import { Form, Button } from 'react-bootstrap'
import CustomerPage from './pages/CustomerPage';
import { addCustomerRequest } from './services/customerService';

class App extends React.Component {
  render(){ 
    const data={
      firstName:"Vijay",
      lastName:"san",
      age:"21",
      mobileNumber:"9874651230",
      email:"vijay07@gmail",
      buildingName:"Jothi flats",
      area:"ashok nagar",
      streetNo:"raj street",
      city:"Chennai",
      state:"TamilNadu",
      country:"India"
    }
    const promise=addCustomerRequest(data);
    promise.then((response)=>{
      console.log(response.data);

    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
    })

    const promise=updateCustomerRequest(data);
    promise.then((response)=>{
      console.log(response.data);

    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
    })

    const id="7926413861"

    const promise=viewCustomerById(id);
    promise.then((response)=>{
      console.log(response.data);

    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
    })

    return (
      <div>
        <Nav />
        <CustomerPage/>
      </div>

    );

  }

}

export default App;

import React from 'react';
import './App.css';
import Nav from './components/Nav'

import { Form, Button } from 'react-bootstrap'
import CustomerPage from './pages/CustomerPage';
import { addCustomerRequest,viewCustomerById,updateCustomerRequest } from './services/customerService';

class App extends React.Component {
  render(){ 
    // const data={
    //   firstName:"Vijay",
    //   lastName:"san",
    //   gender:"male",
    //   age:"21",
    //   mobileNumber:"9874563210",
    //   area:"Ashok nagar"
    // }
    // const promise=addCustomerRequest(data);
    // promise.then((response)=>{
    //   console.log(response.data);

    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })
    const data={
      id:"1355009585",
      firstName:"Vijay",
      lastName:"san",
      age:"21",
      mobileNumber:"9874563210",
    }
    const promise=updateCustomerRequest(data);
    promise.then((response)=>{
      console.log(response.data);

    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
    })

    // const id="4479019240"

    // const promise=viewCustomerById(id);
    // promise.then((response)=>{
    //   console.log(response.data);

    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })

    return (
      <div>
        <Nav />
        <CustomerPage/>
      </div>

    );

  }

}

export default App;

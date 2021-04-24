import React from 'react';
import './App.css';
import Nav from './components/Nav'

import { Form, Button } from 'react-bootstrap'
import BillPage from './pages/BillPage';
import { viewBillByDateRequest, viewBillByIdRequest } from './services/billDetailsServices';


class App extends React.Component {
  render() {

    // const billId="7926413861"

    // const promise=viewBillById(billId);
    // promise.then((response)=>{
    //   console.log(response.data);

    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })
    
      const startDate="2021-04-24"
      const endDate="2021-04-24"
  
    const promise=viewBillByDateRequest(startDate , endDate);
    promise.then((response)=>{
      console.log(response.data);

    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
    })

    return (
      <div>
        <Nav />
        <BillPage/>

      </div>

    );

  }

}

export default App;

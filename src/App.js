import React from 'react';
import './App.css';
import Nav from './Components/Nav'

import { Form, Button } from 'react-bootstrap'
import BillPage from './Pages/BillPage';
import { getBillRequest, viewBillById } from './Services/billDetailsServices';
import ViewBillByDate from './Components/Bill/ViewBillByDate';

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
    const billDate="23/4/2021"

    const promise=ViewBillByDate(billDate);
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

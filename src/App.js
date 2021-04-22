import React from 'react';
import './App.css';
import Nav from './components/Nav'

import { Form, Button } from 'react-bootstrap'
import RestaurantPage from './pages/RestaurantPage';
import { addRestaurantResquest,viewRestaurantById } from './services/restaurantService';

class App extends React.Component {
  render() {
    const data={
      restaurantName: "Chawla",
      managerName: "Mayank",
      contactNumber: "9999955555",
      buildingName: "RedQuarter",
      area: "Lajpat Nagar",
      streetNo: "5",
      city: "Ghaziabad",
      state: "Uttar Pradesh",
      country: "India",
      pincode: "201005"
    }

   
    // const promise=addRestaurantResquest(data);
    // promise.then((response)=>{
    //   console.log(response.data);

    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })
    const restaurantId="7926413861"

    const promise=viewRestaurantById(restaurantId);
    promise.then((response)=>{
      console.log(response.data);

    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
    })



    return (
      <div>
        <Nav />
        <RestaurantPage/>

      </div>

    );

  }

}

export default App;

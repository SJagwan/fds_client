import React from 'react';
import './App.css';
import Nav from './components/Nav'
import FoodCartPage from './pages/FoodCartPage';
import OrderDetailPage from './pages/OrderDetailPage';
import { increaseQuantityRequest,reduceQuantity } from './services/foodCartService';
import { addOrderRequest, updateOrderRequest, viewOrderByCustomerId, viewOrderById} from './services/orderDetailService';

class App extends React.Component {
  render() {

    // const customerId=4213021852;
    // const promise=addOrderRequest(customerId);
    // promise.then((response)=> {
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })

    // const data={
    //   orderId:"1",
    //   orderStatus:"delivered"
    // }
    // const promise=updateOrderRequest(data)
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })

    // const id=1;
    // const promise=viewOrderById(id);
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })

    // const id="4213021852"
    // const promise=viewOrderByCustomerId(id);
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })

    // -----------------------------------------

    // const data={
    //   customerId:"6450668864",
    //   itemId:"7780090162",
    //   quantity:"3",
    // }
    // const promise=increaseQuantityRequest(data);
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })

    // const data={
    //   customerId:"6450668864",
    //   itemId:"7780090162",
    //   quantity:"3",
    // }
    // const promise=reduceQuantityRequest(data)
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })



    return (
      <div>
        <Nav />
        {/* <OrderDetailPage/> */}
        <FoodCartPage/>

      </div>

    );

  }

}

export default App;

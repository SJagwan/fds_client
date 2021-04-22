import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Form, Button } from "react-bootstrap";
import ItemPage from "./pages/ItemPage";
import { addItemRequest, addItemToRestaurantRequest, viewItembyCategoryRequest, viewItembyNameRequest, viewItemRequest } from "./services/itemService";

class App extends React.Component {
  render() {
    // const data = {
    //   itemName: "cake",
    //   catId: "9886363934",
    //   quantity: "12",
    //   cost: "500",
    //   restaurantId: "1493539340",
    // };
    // const promise = addItemRequest(data);
    // promise
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     console.log(error.response.data);
    //   });

    // const id="3461190522"
    // const promise = viewItemRequest(id)
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data)
    // })


    // const itemName="Amul"
    // const promise = viewItembyNameRequest(itemName)
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data)
    // })

    // const data = {
    //   catId:"9886363934"
    // };
    // const promise = viewItembyCategoryRequest(data)
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data)
    // })


    //  const data = {
    //   itemId: "3461190522",
    //   restaurantId: "1493539340",
    // };
    // const promise = addItemToRestaurantRequest(data);
    // promise
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //     console.log(error.response.data);
    //   });

    return (
      <div>
        <Nav />
        <ItemPage />
      </div>
    );
  }
}

export default App;

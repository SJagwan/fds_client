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
    //   catId: "7764976569",
    //   quantity: "12",
    //   cost: "500",
    //   restaurantId: "3017562341",
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

    // const catId="6096426597"
    // const promise = viewItembyCategoryRequest(catId)
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data)
    // })


    //  const data = {
    //   itemId: "2489296786",
    //   restaurantId: "3017562341",
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

import React from 'react';
import './App.css';
import Nav from './components/Nav'

import { Form, Button } from 'react-bootstrap'
import CategoryPage from './pages/CategoryPage';
import { addCategoryRequest,updateCategoryRequest,viewCategoryRequest,viewAllCategoryRequest } from './services/categoryService';

class App extends React.Component {
  render() {
    
    // const data={
    //   name:"sweets"
    // }

    // const promise=addCategoryRequest(data);
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })

    
    // const data={
    //   name:"Indian",
    //   id:"8963037228"
    // }

    

    
    // const id=7637557279

    // const promise=viewCategoryRequest(id)
    // promise.then((response)=>{
    //   console.log(response.data);
    // }).catch((error)=>{
    //   console.log(error.message);
    //   console.log(error.response.data);
    // })

    

    const promise=viewAllCategoryRequest()
    promise.then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.log(error.message);
      console.log(error.response.data);
    })



    return (
      <div>
        <Nav />
        <CategoryPage/>

      </div>

    );

  }

}

export default App;

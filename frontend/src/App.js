import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios, * as others from 'axios';
function App() {
    // let postData = () =>{
    //   axios.post('http://localhost:8000/api/tasks/', {
    //       title: ,
    //       description: 'Flintstone'
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });

    // }
    // let postData = (event) =>{
    //   console.log(event.target.title.value)
    //   axios.post(`http://localhost:8000/api/task`,{ // ${event.id}
    //     title: event.target.title.value,
    //     description: event.target.desc.value,
    //     isDone: false
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }

    let postData = async (event) =>{
      event.preventDefault()
      const requestBody = {
        title: event.target.title.value,
        description: event.target.desc.value,
      };
    
      const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: { 
          'Content-Type': 'application/json',

       },
        body: JSON.stringify(requestBody)
      };
    
      await fetch('http://localhost:8000/api/task/', requestOptions)
        .then(response => console.log(response))
        .catch(error => console.error(error));

    }


    return (
      <div className="App">
        <form onSubmit={postData}>
          <input type="text" name="title" />
          <input type="text" name="desc" />
          <input type="submit" />
        </form>
      </div>
    );

}

export default App;
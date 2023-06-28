import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    
    fetch('http://localhost:8000/api/task/')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error))


  }, []);

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
        .then(() => window.location.reload())
        .catch(error => console.error(error));

    }

    const handleDelete = (id) => {

      const requestOptions = {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }

      fetch(`http://localhost:8000/api/task/${id}/`, requestOptions)
        .then(response => console.log(response))
        .then(() => window.location.reload())
        .catch(error => console.log(error))
    }

    return (
      <div className="App">
        <form onSubmit={postData}>
          <input type="text" name="title" />
          <input type="text" name="desc" />
          <input type="submit" value="submit"/>
        </form>
        <div>
          {
            data.map((item, index) => (
              <ul key={index}>
                <li>
                  {item.title}
                </li>
                <li>
                  {item.description}
                </li>
                <li>
                  {item.id}
                </li>
                <button onClick={() => handleDelete(item.id)}>DELETE</button>
              </ul>
            ))
          }
        </div>


      </div>
    );

}

export default App;
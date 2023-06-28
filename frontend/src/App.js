import React, { Component } from 'react';
import { useEffect, useState } from 'react';
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
      <div className="bg-sky-300 w-[100vw] h-[100vh]">
        <form onSubmit={postData} className=''>
          <input type="text" name="title"className='border-2 rounded ' placeholder='title' />
          <input type="text" name="desc"className='border-2 rounded m-1' placeholder='description' />
          <input type="submit" value="submit"className='border-2 rounded bg-sky-500' />
        </form>
        <div className='grid grid-cols-3 gap-4 '>
          {
            data.map((item, index) => (
              <ul key={index} className='rounded border-sky-950 border-4 text-center bg-sky-600'>
                <li className='font-bold '>
                  {item.title}
                </li>
                <li>
                  {item.description}
                </li>
                <button onClick={() => handleDelete(item.id)}>Done</button>
              </ul>
            ))
          }
        </div>


      </div>
    );

}

export default App;
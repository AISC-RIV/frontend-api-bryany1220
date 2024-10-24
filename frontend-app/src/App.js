import logo from './logo.svg';
import './App.css';
import {Welcome, TouchGrass} from './Welcome';
import React, {useState, useEffect} from 'react';

/*function App() {
  return (
    <div>
      <TouchGrass/>
     <img
      src = "https://i.imgur.com/w2nfC7j.jpeg"
      alt="Touch some grass lil bro" 
      width="1248" height="708" 
      style={{border:"5px solid black" }}
     />
    </div>
  );
}*/

function App() {
  const [data, setData] = useState([]); // Multiple image URLs

  useEffect(() => {
    fetch('https://api.waifu.pics/many/sfw/waifu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        exclude: []  // Example of how you can send data in the POST request if needed
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Check the response structure
        setData(data.files);  // Set the image URLs from the response
      })
      .catch(error => console.error('Error fetching images:', error)); // Handle errors
  }, []);

  if (!data.length) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <h1>Images</h1>
      {data.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Waifu ${index}`} style={{ border: '2px solid black' }} />
        </div>
      ))}
    </div>
  );
}

export default App;

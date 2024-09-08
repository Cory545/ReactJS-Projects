import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState('');

    //When fetchQuote is called - it will then do a GET request to "/api/data" which is handeled serverside.
  const fetchQuote = async () => {
    try {
      const response = await axios.get('/api/data');
      //Although not in a React Component as it sits now, but it will be when its called by useEffect
      setData(response.data.content); // Update state with new quote
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch data on initial render and button click
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Get a Random Quote!</h1>
      <hr />
      <p>Random Quote:</p>
      <button onClick={fetchQuote}>Get New Quote</button>
      <hr />
      <p>"{data}"</p>
    </div>
  );
}

export default App;
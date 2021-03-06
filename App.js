// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./App.css";
// import Card from "./components/Card/Card";
import Home from "./components/Home/Home.js";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [moviesFound, setMoviesFound] = useState([]);

  const onSearch = (movieToLook) => {
    fetch(`https://imdb-api.com/API/Search/k_l8q1htwd/${movieToLook}`)
      .then((response) => response.json())
      .then((data) => setMoviesFound(data.results))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <Navbar onSearch={onSearch} />
      <Home delSearch={moviesFound} />
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}

import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let api = fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))

  return (
    <div className="App">
      <header className="App-header">
          
      </header>
    </div>
  );
}

export default App;

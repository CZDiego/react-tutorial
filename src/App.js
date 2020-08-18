import React from 'react';
import './App.css';
import Hero from "./components/errorBoundary/Hero";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

function App() {

  const heros = [
    "Batman",
    "SuperMan",
    "Joker"
  ];
  return (
    <div className="App">

      {heros.map((hero, index) => {
        return <ErrorBoundary key={index}><Hero heroName={hero}/></ErrorBoundary>
      })}

    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import ClickCounter from "./components/higherOrderComponents/ClickCounter";
import HoverCounter from "./components/higherOrderComponents/HoverCounter";

function App() {

  return (
    <div className="App">

      <ClickCounter name="Diego"/>

      <HoverCounter name="Diego"/>
    </div>
  );
}

export default App;

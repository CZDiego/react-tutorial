import React from 'react';
import './App.css';
import {Greet} from './components/Greet';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";

function App() {
  return (
    <div className="App">
      {/* Props are immutable */}
      <Greet name="Bruce" heroName="Batman">
        <p>This is children #1</p>
        <p>This is children #2</p>
        <p>This is children #3</p>
      </Greet>
      <Greet name="Clark" heroName="Super man">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>

      <Welcome name="Bruce" heroName={"Batman"}/>
      <Welcome name="Clark" heroName={"Super man"}/>
      <Welcome name="Diana" heroName={"Wonder Woman"}/>

      <Hello/>
    </div>
  );
}

export default App;

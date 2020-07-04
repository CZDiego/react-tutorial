import React from 'react';
import './App.css';
import Counter from "./components/state/Counter";
import FunctionClick from "./components/eventHandling/FunctionClick";
import ClassClick from "./components/eventHandling/ClassClick";
import EventBind from "./components/eventHandling/EventBind";
import ParentComponent from "./components/methods/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* Props are immutable */}
      {/*<Greet name="Bruce" heroName="Batman">
        <p>This is children #1</p>
        <p>This is children #2</p>
        <p>This is children #3</p>
      </Greet>*/}

      {/*<Message/>*/}
      <Counter/>

      <br/>

      <FunctionClick/>

      <br/>

      <ClassClick/>

      <br/>

      <EventBind/>

      <br/>

      <ParentComponent/>

    </div>
  );
}

export default App;

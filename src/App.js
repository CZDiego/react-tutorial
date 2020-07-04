import React from 'react';
import './App.css';
import Counter from "./components/State/Counter";
import FunctionClick from "./components/EventHandling/FunctionClick";
import ClassClick from "./components/EventHandling/ClassClick";
import EventBind from "./components/EventHandling/EventBind";
import ParentComponent from "./components/Methods/ParentComponent";

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

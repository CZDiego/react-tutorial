import React from 'react';
import './App.css';
import UserGreeting from "./components/conditionalRendering/UserGreeting";

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
      {/*<Counter/>

      <br/>

      <FunctionClick/>

      <br/>

      <ClassClick/>

      <br/>

      <EventBind/>

      <br/>

      <ParentComponent/>*/}

      <UserGreeting/>

    </div>
  );
}

export default App;

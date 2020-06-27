import React from 'react';
import './App.css';
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      {/* Props are immutable */}
      {/*<Greet name="Bruce" heroName="Batman">
        <p>This is children #1</p>
        <p>This is children #2</p>
        <p>This is children #3</p>
      </Greet>*/}

      <Message/>

    </div>
  );
}

export default App;

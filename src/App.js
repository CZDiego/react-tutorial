import React from 'react';
import './App.css';
import PersonList from "./components/lists/PersonList";
import Stylesheet from "./components/Style/StyleSheet";
import Inline from "./components/Style/Inline";

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

      <PersonList/>

      <Stylesheet primary={true}/>

      <Inline/>

    </div>
  );
}

export default App;

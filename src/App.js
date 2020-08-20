import React from 'react';
import './App.css';
import ClickCounterTwo from "./components/higherOrderComponents/ClickCounterTwo";
import HoverCounterTwo from "./components/higherOrderComponents/HoverCounterTwo";
import Counter from "./components/higherOrderComponents/Counter";

function App() {

  return (
    <div className="App">

      {/*

      <ClickCounter name="Diego"/>

      <HoverCounter name="Diego"/>

      <User render={(isLoggedIn) => isLoggedIn ? 'Diego' : 'Guest'}/>

      */}

      {/*Render props pattern*/}
      <Counter>
        {
          (count, incrementCount) =>
            <ClickCounterTwo count={count}
                             incrementCount={incrementCount}/>
        }
      </Counter>

      <Counter>
        {
          (count, incrementCount) =>
            <HoverCounterTwo count={count}
                             incrementCount={incrementCount}/>
        }
      </Counter>
      
    </div>
  );
}

export default App;

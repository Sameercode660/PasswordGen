import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 20) {
      setCount(count + 1);
    } else {
      alert("You reached the highest limit!");
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You reached to the lowest limit!");
    }
  }
  return (
    <>
      <h1>Hello, Sameer</h1>
      <div className="container">
        <p>Value : {count}</p>
      </div>
      <div className="button-container">
        <button className="increment" onClick={increment}>
          Increment
        </button>
        <button className="Decrement" onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;

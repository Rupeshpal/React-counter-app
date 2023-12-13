import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeVale = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      return;
    }
  };

  return (
    <>
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <h2 id='title'>React Counter App</h2>
          </ul>
        </div>
        <div className="card-body">
          <h1 id="counter">{counter}</h1>
          <a href="#" onClick={removeVale} className="btn btn-primary mx-4 mt-1">
            Decrement
          </a>
          <a c="#" onClick={addValue} className="btn btn-success mx-4 mt-1">
            Increment
          </a>
        </div>
      </div>
    </>
  );
}

export default App;

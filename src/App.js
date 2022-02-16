import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import List from "./list";
import data from "./data";

function App() {
  const [person, setPerson] = useState(data);

  const clearContentHandler = function () {
    setPerson([]);
  };

  return (
    <div className="container">
      <h2>{person.length} employees in the last month.</h2>
      <List people={person} />
      <div className="btn-container">
        <button className="btn" onClick={clearContentHandler}>
          clear all
        </button>
      </div>
    </div>
  );
}

export default App;

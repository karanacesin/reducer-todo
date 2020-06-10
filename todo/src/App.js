import React, { useReducer, useState } from 'react';
import {initalState, reducer} from './reducers/reducer';

import './App.css';

function App() {
  const [state, dispatch] = useReducer (reducer, initalState)
  const [item, setItem] = useState


  return (
    <div >
      <header >
       <h1>My Todo List</h1>
      </header>
    </div>
  );
}

export default App;

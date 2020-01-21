import React, { useReducer } from 'react';
import Todos from './Todos';
import Form from './Form';
import { reducer, initialState } from "./reducers/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{margin: "5%"}}>
      <Todos state={state} dispatch={dispatch}/>
      <Form dispatch={dispatch}/>
    </div>
  );
}

export default App;

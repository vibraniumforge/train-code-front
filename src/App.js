import React from "react";
import "./App.css";
import { Form } from "./components/Form.js";
import { Error } from "./components/Error.js";
import { TrainList } from "./components/TrainList.js";
import { GlobalProvider } from "./context/GlobalState.js";

function App() {
  return (
    <GlobalProvider>
      <div className="app">
        <h1>Train Code Finder</h1>
        <Form />
        <TrainList />
        <Error />
      </div>
    </GlobalProvider>
  );
}

export default App;

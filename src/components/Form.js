import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

const Form = () => {
  const [input, setInput] = useState("MNPPD");
  const [isSearched, setIsSearched] = useState(false);

  const { getTrain } = useContext(GlobalContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    getTrain(input.toUpperCase());
    setIsSearched(true);
    setInput("");
  };

  return (
    <div className="form">
      <h1>Train Code Finder</h1>
      <div>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <input
            type="text"
            placeholder="Enter code here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" value="Submit" disabled={input.length < 4} />
        </form>
      </div>
    </div>
  );
};

export default Form;

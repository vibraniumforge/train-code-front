import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

export const Form = () => {
  const [input, setInput] = useState("MNPPD");

  const { getTrain } = useContext(GlobalContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    getTrain(input.toUpperCase());
    setInput("");
  };

  return (
    <div className="form">
      <div>
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <input
            type="text"
            placeholder="Enter code here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="submit"
            className={input.length < 3 ? "disabled" : "submit-btn"}
            value="Submit"
            disabled={input.length < 3}
          />
        </form>
      </div>
    </div>
  );
};

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";

export const Error = () => {
  const { error } = useContext(GlobalContext);
  return error ? <h4 className="error">{error}</h4> : null;
};

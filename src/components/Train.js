import React from "react";
// import { GlobalContext } from "../context/GlobalState.js";

export const Train = ({ train }) => {
  console.log(train);
  return (
    <>
      <td>{train.railroad}</td>
      <td>{train.symbol}</td>
      <td>{train.description}</td>
      <td>{train.origin}</td>
      <td>{train.destination}</td>
      <td>{train.frequency}</td>
      <td>{train.notes}</td>
    </>
  );
};

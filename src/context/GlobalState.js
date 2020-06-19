import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";

const url = "http://localhost:3001/api/v1/get_train_by_symbol";

const initialState = {
  trains: [],
  error: "",
  loading: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTrain(info) {
    const data = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        mode: "no-cors",
      },
    };
    try {
      const result = await fetch(`${url}/${info}  `, data);
      const response = await result.json();
      console.log("response=", response);
      console.log("result=", result);
      dispatch({
        type: "GET_TRAIN",
        payload: response.data,
      });
    } catch (err) {
      console.log("GET_TRAIN_ERROR", err);
      dispatch({ type: "GET_TRAIN_ERROR", payload: err.response });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        trains: state.trains,
        error: state.error,
        loading: state.loading,
        getTrain,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

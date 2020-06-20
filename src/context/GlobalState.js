import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";

const url = "http://localhost:3001/api/v1/get_train_by_symbol";

const initialState = {
  trains: [],
  error: "",
  loading: false,
  searched: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTrain(info) {
    try {
      const result = await fetch(`${url}/${info}  `);
      const response = await result.json();
      if (response.success) {
        dispatch({
          type: "GET_TRAIN",
          payload: response.data,
        });
      } else {
        dispatch({ type: "GET_TRAIN_ERROR", payload: response.message });
      }
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

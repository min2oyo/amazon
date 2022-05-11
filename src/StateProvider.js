import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();  // 데이터 레이어 준비

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);  // 데이터 레이어 제공

export const useStateValue = () => useContext(StateContext);
// 앱으로 이 데이터 레이어를 감싸줌

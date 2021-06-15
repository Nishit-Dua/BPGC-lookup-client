import React, { useReducer } from "react";
import { reducer, ReturnType } from "./reducer";

const AppContext = React.createContext<null | ReturnType>(null);

export type StateType = {
  searchData: PersonType[];
  isLoading: boolean;
  theme: string;
  error: {
    isError: boolean;
    message: string;
  };
};

export interface PersonType {
  bitsId: string;
  name: string;
  hostel: string;
  hostelRoom: null | string;
  _id: null | string;
  cgList: Array<number | null>;
}

const initialState: StateType = {
  searchData: [],
  isLoading: false,
  theme: "light",
  error: {
    isError: false,
    message: "",
  },
};

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext)!;
};

export { AppProvider, useGlobalContext };

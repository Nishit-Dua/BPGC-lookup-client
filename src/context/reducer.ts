import { StateType } from "./AppProvider";

type DispatchType = {
  type: Actions;
  payload?: any;
};

// Add Dispatch "type" Actions Here To add type support (and use in TS)
type Actions = "SET_LOADING" | "FETCH" | "DELETE" | "NOT_FOUND";

export interface ReturnType extends StateType {
  dispatch: React.Dispatch<DispatchType>;
}

export const reducer = (state: StateType, action: DispatchType): StateType => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
        error: {
          isError: false,
          message: "",
        },
      };
    case "FETCH":
      return {
        ...state,
        searchData: action.payload,
        isLoading: false,
        error: {
          isError: false,
          message: "",
        },
      };
    case "NOT_FOUND":
      return {
        ...state,
        searchData: [],
        isLoading: false,
        error: {
          isError: true,
          message: `No person with the name or id of ${action.payload} found`,
        },
      };
    case "DELETE":
      return {
        ...state,
        searchData: [],
        error: {
          isError: false,
          message: "",
        },
      };

    default:
      return state;
  }
};

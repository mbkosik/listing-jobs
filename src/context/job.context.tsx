import React, { useReducer } from "react";

export enum ActionType {
  SET_ACTIVE_FILTER = "SET_ACTIVE_FILTER",
  REMOVE_ACTIVE_FILTER = "REMOVE_ACTIVE_FILTER",
  RESET = "RESET",
}

export type TJobContext = {
  state: IState;
  dispatch: React.Dispatch<TAction>;
};

export interface IState {
  activeFilters: Array<string>;
}

export type TAction =
  | {
      type: ActionType.SET_ACTIVE_FILTER;
      payload: string;
    }
  | {
      type: ActionType.REMOVE_ACTIVE_FILTER;
      payload: string;
  }
  | {
      type: ActionType.RESET;
    };

const initialState = {
  activeFilters: [],
};

export const JobStore = React.createContext<TJobContext | undefined>({
  state: initialState,
  dispatch: () => null,
});

export const useJobStore = () => {
  const context = React.useContext(JobStore);
  if (context === undefined) {
    throw new Error("context is undefined");
  }
  return context;
};

export const jobReducer = (state: IState, action: TAction) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_FILTER:
      return {
        ...state,
        activeFilters: [...state.activeFilters, action.payload],
      };
    case ActionType.REMOVE_ACTIVE_FILTER:
      return {
        ...state, 
        activeFilters: state.activeFilters.filter(filter => action.payload !== filter),
      }
    case ActionType.RESET:
      return { ...initialState };
    default:
      return state;
  }
};

export interface IJobProviderProps {
  children: React.ReactNode;
}

export const JobProvider: React.FC<IJobProviderProps> = (props) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);

  return (
    <JobStore.Provider value={{ state, dispatch }}>
      {props.children}
    </JobStore.Provider>
  );
};

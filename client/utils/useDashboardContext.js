import React, { useContext, useReducer } from "react";
import Actions from "./dashboardActions";

const DashboardContext = React.createContext({
  userPosition: null,
  viewport: null,
});

const initialState = {
  userPosition: null,
  viewport: null,
  selectedUser: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case Actions.UPDATE_VIEWPORT:
      return {
        ...state,
        viewport: payload,
      };
    case Actions.UPDATE_USER_POSITION:
      return {
        ...state,
        userPosition: payload,
      };
    case Actions.SELECT_USER:
      return {
        ...state,
        selectedUser: payload,
      };
    case Actions.CLEAR_USER:
      return {
        ...state,
        selectedUser: null,
      };
    default:
      return state;
  }
}

function DashboardProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <DashboardContext.Provider value={[state, dispatch]} {...props} />;
}

const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export { useDashboardContext, DashboardProvider };

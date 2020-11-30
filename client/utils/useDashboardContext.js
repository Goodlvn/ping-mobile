import React, { useContext, useReducer } from "react";
import Actions from './dashboardActions';

const DashboardContext = React.createContext({
    userPosition: null,
    viewport: {
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 13
    },
    selectedUser: null,
});

const initialState = {
    userPosition: null,
    viewport: {
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 13
    },
    selectedUser: null,
};

function reducer(state, { type, payload }) {
    switch (type) {
        case Actions.UPDATE_VIEWPORT:
            return {
                ...state,
                viewport: payload
            }
        case Actions.UPDATE_USER_POSITION:
            return {
                ...state,
                userPosition: payload
            }
        case Actions.SELECT_USER: 
            return {
                ...state,
                selectedUser: payload,
            }
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

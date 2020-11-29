import React, { useContext, useReducer, useEffect } from "react";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = React.createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

function reducer(state, { type, payload }) {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    // if AsyncStorage has a jwt token from the previous login then we set the user property of initial state to the decoded token. also check if the token has expired or not
    async function checkUser() {
      const token = await AsyncStorage.getItem("jwtToken");
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
          await AsyncStorage.removeItem("jwtToken");
        } else {
          dispatch({ type: "LOGIN", payload: decodedToken });
        }
      }
    }
    checkUser();
  }, []);

  async function login(userData) {
    await AsyncStorage.setItem("jwtToken", userData.token);
    dispatch({ type: "LOGIN", payload: userData });
  }

  async function logout() {
    await AsyncStorage.removeItem("jwtToken");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

function useAuthContext() {
  return useContext(AuthContext);
}

export { useAuthContext, AuthProvider };

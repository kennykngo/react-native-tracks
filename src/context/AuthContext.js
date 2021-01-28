import AsyncStorage from "@react-native-async-storage/async-storage";

import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };

    case "signup":
      return { token: action.payload, errorMessage: "" };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  // make an API request to sign up with that email and password
  // if we sign up, modify our state, say that we are authenticated
  // If signup fails, we need to reflect error message
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });

    // navigate to main flow
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with signup",
    });
  }
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    /* 
		try to sign in
		*/
  };
};

const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);

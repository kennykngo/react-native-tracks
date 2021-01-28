import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        // onWillFocus={clearErrorMessage}
        onWillBlur={clearErrorMessage}
      />
      <AuthForm
        headerText="Signin to Your Account"
        // errorMessage={state.errorMessage}
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
        // onSubmit={({ email, password }) => signin({ email, password })}
        // SAME AS ABOVE
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign up instead."
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SigninScreen;

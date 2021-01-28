import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";

import AuthForm from "../components/AuthForm";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
        // onSubmit={({ email, password }) => signup({ email, password })}
        // SAME AS ABOVE
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in Instead
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 10,
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  link: {
    color: "blue",
  },
});

export default SignupScreen;

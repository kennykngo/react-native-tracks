import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";

import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Spacer> */}
      <Text>Sign Up for Tracker</Text>
      {/* </Spacer> */}
      <Input label="email" />
      <Input label="password" />
      <Button title="Sign Up" />
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
    borderColor: "red",
    borderWidth: 10,
    flex: 1,
  },
});

export default SignupScreen;

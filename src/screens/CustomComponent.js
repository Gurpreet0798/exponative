// import libraries to create components
import React from "react";
import {Text, StyleSheet, View, StatusBar} from "react-native";

//create a component that returns some jsx/simple function
const CustomComponent = () => {
  return (
  <View>
  <Text style = {styles.textStyle}>
    Hello World! This is my custom components ☺️
    </Text>
  <StatusBar style = "auto"></StatusBar>
  </View>
  );
};

//create a stylesheet to style the component
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

//export the file, so that we can use it elsewhere in our app
export default CustomComponent;
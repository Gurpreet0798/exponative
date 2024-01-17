// Question:-
// Write a program which show THREE TEXT ELEMENTS...
//(A.) The first should say "Welcome to Thapa Technical Channel". Also give the text color Blue, make it Bold Text with font size 40 using styling.

//(B.) The second should say "We love react native and I am a subscriber of Thapa Technical Channel" and have a font size of 30.

//(C.) The third one should say "Hii, My name is <yourName>" and you need to assign your name to a variable then print it up in JSX elements.

// Answer:-
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const FirstChallenge = () => {
  const yourName = "Gurpreet Kaur";
  return (
    <View>
      <Text style={styles.textStyleOne}>
        Welcome to Thapa Technical Channel
      </Text>
      <Text style={styles.textStyleSecond}>
        We love react native and I am a subscriber of Thapa Technical Channel
      </Text>
      <Text>Hii, My name is {yourName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleOne: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 40,
  },
  textStyleSecond: {
    color: "black",
    fontSize: 30,
  },
});

export default FirstChallenge;

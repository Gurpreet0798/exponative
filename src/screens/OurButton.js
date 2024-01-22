import React from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

const OurButton = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Buttons</Text>
      <Button 
      title="Join Now" 
      onPress={() => {
        // console.log("this is react native");
        Alert.alert("Simple Button pressed");
      }}
      disabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 200,
    textAlign: "center",
    fontSize: 30,
  },
});

export default OurButton;

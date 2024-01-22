import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageFile = () => {
  return (
    <View style={styles.lifeStyle}>
      <Text style={styles.textStyle}>This is Images File</Text>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/native_image.jpeg")}
      />

       <Image
        style={styles.imageStyle}
        source={require("../../assets/native_image.jpeg")}
      />

       <Image
        style={styles.imageStyle}
        source={require("../../assets/native_image.jpeg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lifeStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
    color: "blue",
    margin: 30,
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
});

export default ImageFile;

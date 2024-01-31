import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import CardDetail from "../components/CardDetail";

const ImageFile = () => {
  return (
    // <View style={styles.lifeStyle}>
    //   <Text style={styles.textStyle}>This is Images File</Text>
    //   <Image
    //     style={styles.imageStyle}
    //     source={require("../../assets/native_image.jpeg")}
    //   />
    <View>
      <CardDetail
        textData="This is my first image"
        imgSrc={require("../../assets/native_image.jpeg")}
      />
      <CardDetail
        textData="This is my second image"
        imgSrc={require("../../assets/native_image.jpeg")}
      />
      <CardDetail
        textData="This is my third image"
        imgSrc={require("../../assets/native_image.jpeg")}
      />
      <CardDetail
        textData="This is my fourth image"
        imgSrc={require("../../assets/native_image.jpeg")}
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

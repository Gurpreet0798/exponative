import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CardDetail = ({textData, imgSrc}) => {
  return (
    <View style={styles.lifeStyle}>
      <Text style={styles.textStyle}>{textData}</Text>
      <Image
        style={styles.imageStyle}
        source={imgSrc}
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

export default CardDetail;

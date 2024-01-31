import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

const OurButton = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Buttons</Text>
      <Button
        // disabled
        title="Join Now"
        onPress={() => {
          // console.log("this is react native");
          Alert.alert("Simple Button pressed");
        }}
      />
      {/* //IN TouchableOpacity THERE IS NO TITLE AND WE NEED TO CLOSE IT AGAIN
      BECAUSE IT IS NOT A SELF CLOSING TAG */}
      <TouchableOpacity
        // disabled
        onPress={() => {
          console.log("this is react native");
          Alert.alert("Simple Button pressed");
        }}
      >
        <Image
        style={styles.imgStyle} 
        source = {require("../../assets/native_image.jpeg")} />
        <Text>Join me on Github</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 200,
    textAlign: "center",
    fontSize: 30,
  },
  imgStyle: {
    width: 200,
    height: 200,
    alignSelf: "center",
    borderRadius: 100,
  }
});

export default OurButton;

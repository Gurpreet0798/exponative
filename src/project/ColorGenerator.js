import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FlatList } from "react-native-web";

const ColorGenerator = () => {
  const [newColor, setNewColor] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // console.log(red);

    return `rgb(${red}, ${green}, ${blue})`;
  };

  console.log(newColor);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          // Alert.alert(randomColor());
          setNewColor([...newColor, randomColor()]);
        }}
      >
        <Text style={styles.textStyle}> Generate Random Color</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(key) => key}
        data={newColor}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <View style={styles.imageContainer}>
              <View
                style={{
                  backgroundColor: item,
                  width: 100,
                  height: 100,
                  borderRadius: 5,
                  marginTop: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80%",
                }}
              >
                <Text style={styles.textStyle}>{item}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 80,
  },
  buttonStyle: {
    backgroundColor: "#00b0ff",
    position: "relative",
    overflow: "hidden",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 20,
  },
  imageContainer: {
    marginVertical: 50,
    paddingHorizontal: 30,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});

export default ColorGenerator;

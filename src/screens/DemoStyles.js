import React from "react";
import { View, StyleSheet, Text } from "react-native";

const DemoStyles = () => {
  return (
    <View>
      <View style={styles.parentView}>
        <Text style={[styles.childText, styles.commonStyle]}>Box 1</Text>
        <Text style={[styles.childText2, styles.commonStyle]}>
          Box 2
        </Text>
        <Text style={[styles.childText3, styles.commonStyle]}>
          Box 3
        </Text>
        <Text style={[styles.childText4, styles.commonStyle]}>
          Box 4
        </Text>
        <View style= {styles.subParent}>
        <Text style={[styles.childText5, styles.commonStyle]}>
          Box 5
        </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    width: "150%",
    height: 500,
    marginTop: 100,
    marginHorizontal: 90,
    borderWidth: 3,
    borderColor: "#101820FF",
    backgroundColor: "aliceblue",
    // flexDirection: "column",
    // justifyContent: "space-evenly",
    // alignItems: "flex-start",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    position: "relative",
  },
  childText: {
    backgroundColor: "#97BC62FF",
    borderColor: "#2C5F2D",
    color: "#2C5F2D",
    // flex: 1,
    // marginTop: 30,
  },
  childText2: {
    backgroundColor: "#D4B996FF",
    borderColor: "#A07855FF",
    color: "  #A07855FF",
    // flex: 1,
    right: 0,
  },
  childText3: {
    backgroundColor: "#9CC3D5FF",
    borderColor: "#0063B2FF",
    color: "  #0063B2FF",
    // alignSelf: "stretch",
    bottom: 0,
  },
  childText4: {
    backgroundColor: "#F714E0",
    borderColor: "#1414F7",
    color: "  #1414F7",
    bottom: 0,
    right: 0,
  },
  childText5: {
    backgroundColor: "#14F786",
    borderColor: "#F71460",
    color: "  #F71460",
    // top: "40%",
    // left: "40%",
    alignSelf: "center",
  },
  commonStyle: {
    fontSize: 20,
    // paddingVertical: 15,
    // textAlign: "center",
    borderWidth: 2,
    width: 60,
    height: 60,
    //borderColor: "red",
    // marginBottom: 30,
    // marginLeft: 50,
    // marginRight: 50,
    // marginHorizontal: 50,
    position: "absolute",
  },
  subParent: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default DemoStyles;

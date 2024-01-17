// import libraries to create components
import React from "react";
import { Text, StyleSheet, View, StatusBar } from "react-native";
import CustomComponent from "./src/screens/CustomComponent";
import FirstChallenge from "./src/screens/FirstChallenge";

//create a component that returns some jsx/simple function

//  NOW USING ALL IMPORTANT JSX RULES FOR THE CODE AND APPLYING THEM HERE:-
const App = () => {
  const myName = "Gurpreet Kaur";
  const myElement = (
    <Text>
      Hello World! This is written for explaining all important jsx rules
    </Text>
  );

  const getFullName = (firstName, secondName, thirdName) => {
    return `My name is ${firstName} ${secondName} ${thirdName}`;
  };
  return (
    <View>
      <FirstChallenge />
      {/* <Text style={styles.textStyle}>Hello World! {myName}</Text>
      <StatusBar style="auto"></StatusBar>
      <CustomComponent />
      {myElement}
      <Text>Hi!! , {getFullName("Gurpreet", "Kaur", "Takkar.")} </Text> */}
    </View>
  );
};

// create a stylesheet to style the component
const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    display: "flex",
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

//export the file, so that we can use it elsewhere in our app
export default App;

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello World gurpreet</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

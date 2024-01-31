import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking } from "react-native";
import {
  JosefinSans_100Thin,
  JosefinSans_200ExtraLight,
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
  JosefinSans_100Thin_Italic,
  JosefinSans_200ExtraLight_Italic,
  JosefinSans_300Light_Italic,
  JosefinSans_400Regular_Italic,
  JosefinSans_500Medium_Italic,
  JosefinSans_600SemiBold_Italic,
  JosefinSans_700Bold_Italic,
} from "@expo-google-fonts/josefin-sans";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const NetflixCard = () => {
  let [fontsLoad, error] = useFonts({
    JosefinSans_100Thin,
    JosefinSans_200ExtraLight,
    JosefinSans_300Light,
    JosefinSans_400Regular,
    JosefinSans_500Medium,
    JosefinSans_600SemiBold,
    JosefinSans_700Bold,
    JosefinSans_100Thin_Italic,
    JosefinSans_200ExtraLight_Italic,
    JosefinSans_300Light_Italic,
    JosefinSans_400Regular_Italic,
    JosefinSans_500Medium_Italic,
    JosefinSans_600SemiBold_Italic,
    JosefinSans_700Bold_Italic,
  });

  if (!fontsLoad) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Netflix Card </Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*i7RDLgwRmP4_C28LCscVOA.jpeg",
          }}
        />
        <View style={styles.poster_info}>
          <Text style={styles.poster_title}>ALL OF US ARE Dead</Text>
          <Text style={styles.poster_text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            corrupti, consequatur, reprehenderit est harum dicta autem minima
            repudiandae sint tempore qui. Cumque tempore qui adipisci illo earum
            sint nisi laboriosam!
          </Text>
        </View>
        <Button
          style={styles.buttonStyle}
          title="Watch Now"
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "JosefinSans_700Bold",
  },
  poster: {
    width: 250,
    borderWidth: 1,
    alignItems: "center",
  },
  poster_info: {
    alignItems: "center",
    marginVertical: 10,
  },
  poster_title: {
    fontSize: 20,
    marginBottom: 10,
  },
  poster_text: {
    color: "#999",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  imgStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  buttonStyle: {
    borderWidth: 0,
    borderRadius: 20,
    padding: 20,
  },
});

export default NetflixCard;
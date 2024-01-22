import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const ChallengeFlatList = () => {
  const netflixSeries = [
    {
      name: "Archive 81",
      year: "2022",
      Creator: "Rebecca Sonnenshine",
      Genre: "Horror, thriller",
    },
    {
      name: "Cheer",
      year: "2021 - 2022",
      Creator: "Greg Whiteley",
      Genre: "Docuseries",
    },
    {
      name: "Cobrs Kai",
      year: "2021 - 2022",
      Creator: "Hayden Schlossberg",
      Genre: "Drama",
    },
    {
      name: "The Witcher",
      year: "2020 - 2021",
      Creator: "Hayden Schlossberg",
      Genre: "Reality",
    },
    {
      name: "Emily in Paris",
      year: "2020",
      Creator: "Darren Star",
      Genre: "Romance, Drama",
    },
    {
      name: "Death Note",
      year: "2021",
      Creator: "unknown",
      Genre: "Horror, thriller",
    },
  ];
  return (
    <View>
    <Text style = {styles.textStyleOne}> List of TOP 10 Series in Netflix.</Text>
    <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.name;
      }}
      horizontal
      showsHorizontalScrollIndicator = {false}
      data={netflixSeries}
      renderItem={({ item }) => {
        return(
          <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}> NAME: {item.name}</Text>
            <Text style = {styles.textStyle}> CREATOR: {item.Creator}</Text>
            <Text style = {styles.textStyle}> YEAR: {item.year}</Text>
            <Text style = {styles.textStyle}> GENRE: {item.Genre}</Text>
          </View>
        );
      }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    textAlign: "center",
    padding: 5,
    margin: 20,
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    backgroundColor: "#009688",
    textAlign: "center",
    padding: 5,
  },
  viewStyle: {
    margin: 20,
    padding: 5,
  },
  textStyleOne: {
    margin: 30,
    fontSize: 50,
  },
});
export default ChallengeFlatList;

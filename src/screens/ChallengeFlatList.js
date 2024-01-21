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
    <FlatList
      style={styles.listStyle}
      keyExtractor={(key) => {
        return key.name;
      }}
      data={netflixSeries}
      renderItem={({ item }) => {
        return <Text style={styles.textStyles}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  listStyle: {
    textAlign: "center",
    padding: 5,
    margin: 20,
  },
  textStyles: {
    color: "white",
    margin: 20,
    padding: 5,
    fontSize: 30,
    backgroundColor: "#9400d3",
    height: "15%",
  },
});
export default ChallengeFlatList;

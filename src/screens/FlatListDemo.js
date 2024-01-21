import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-web';

const FlatListDemo = () => {
    const names = [
      {
        index: "1",
        name: "Gurpreet",
      },
      {
        index: "2",
        name: "Kaur",
      },
      {
        index: "3",
        name: "Takkar",
      },
      {
        index: "4",
        name: "React_Native_learning",
      },
      {
        index: "5",
        name: "Gurpreet",
      },
      {
        index: "6",
        name: "Gurpreet",
      },
      {
        index: "7",
        name: "Gurpreet",
      },
      {
        index: "8",
        name: "Gurpreet",
      },
    ];
    return (
      <FlatList 
      style = {styles.LifeStyle} 
      keyExtractor = {(key) => {
        return key.index;
      }}
      horizontal
      inverted
      // numColumns = {2}
      showsHorizontalScrollIndicator = {false}
      data = {names}
      renderItem={({item}) => {
      console.log(item.name);
      return <Text style = {styles.textStyle}>
        {item.name}
        </Text>
      }}
      />
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
    height: 100,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  LifeStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  }
});

export default FlatListDemo;

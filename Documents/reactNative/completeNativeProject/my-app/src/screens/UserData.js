import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";

const UserData = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState([]);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );
      const realData = await response.json();
      setMyData(realData);
      setIsLoaded(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // render the students cards
  const ShowUserData = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}>Bio-Data</Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>

          <View style={styles.mainContainer}>
            <Text style={styles.myName}>Name: {item.name} </Text>
            <Text style={styles.myName}>email: {item.email} </Text>
            <Text style={styles.myName}>mobile: {item.mobile} </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text>List of Students</Text>
      <FlatList data={myData} renderItem={ShowUserData} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    height: 350,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 20,
  },
  bioDataContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#353535",
    paddingVertical: 10,
    fontFamily: "JosefinSans_400Regular",
  },
});

export default UserData;

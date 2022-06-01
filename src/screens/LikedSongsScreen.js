import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Context from "../context/context";

const LikedSongsScreen = () => {
  const { artists, artist } = useContext(Context);
  console.log(artist);

  return (
    <View style={styles.container}>
      <Text>Liked Artists</Text>
      <FlatList
        data={artists}
        keyExtractor={(artist) => artist}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 4,
    marginBottom: 5,
    marginTop: 5,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  headline: {
    marginTop: 2,
    fontWeight: "bold",
  },
  urlStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 12,
  },
});
export default LikedSongsScreen;

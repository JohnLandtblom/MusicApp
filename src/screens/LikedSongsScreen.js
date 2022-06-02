import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { LogBox } from "react-native";
import LikedSongs from "../components/LikedSongs";
import LikedArtists from "../components/LikedArtists";
import LikedAlbums from "../components/LikedAlbums";

const LikedSongsScreen = () => {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LikedSongs></LikedSongs>
        <LikedArtists></LikedArtists>
        <LikedAlbums></LikedAlbums>
      </ScrollView>
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

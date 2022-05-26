import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const SongCard = ({ song }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={song.data.albumOfTrack.coverArt.sources}
      ></Image>
      <Text style={styles.name}>{song.data.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default SongCard;

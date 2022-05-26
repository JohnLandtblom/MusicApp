import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ArtistCard = ({ artist }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={artist.data.visuals.avatarImage.sources}
      ></Image>
      <Text style={styles.name}>{artist.data.profile.name}</Text>
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

export default ArtistCard;

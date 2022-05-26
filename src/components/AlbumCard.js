import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const AlbumCard = ({ album }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={album.data.coverArt.sources}></Image>
      <Text style={styles.name}>{album.data.name}</Text>
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

export default AlbumCard;

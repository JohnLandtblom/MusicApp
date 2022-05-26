import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";
import SongCard from "./SongCard";

const SearchResultList = ({ category, displayList }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{category}</Text>

      {displayList?.map((item, i) => {
        switch (category) {
          case "Artists":
            return <ArtistCard artist={item} key={i} />;
          case "Songs":
            return <SongCard horizontal={true} song={item} key={i} />;
          case "Albums":
            return <AlbumCard album={item} key={i} />;
          default:
            return null;
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  flatListStyle: {
    height: 300,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default SearchResultList;

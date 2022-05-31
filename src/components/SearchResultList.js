import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";
import SongCard from "./SongCard";
import { withNavigation } from "react-navigation";

const SearchResultList = ({ category, displayList, propData }) => {
  return (
    <View>
      <Text style={styles.category}>{category}</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {displayList?.map((item) => {
          switch (category) {
            case "Artists":
              return (
                <ArtistCard
                  propData={propData(artist)}
                  key={Math.random().toString()}
                  artist={item}
                />
              );
            case "Songs":
              return <SongCard key={Math.random().toString()} song={item} />;
            case "Albums":
              return <AlbumCard key={Math.random().toString()} album={item} />;
            default:
              return null;
          }
        })}
      </ScrollView>
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

export default withNavigation(SearchResultList);

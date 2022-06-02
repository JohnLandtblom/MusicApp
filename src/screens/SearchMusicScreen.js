import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchResultList from "../components/SearchResultList";
import useMusicResults from "../hooks/useMusicResults";
import { Feather } from "@expo/vector-icons";

const SearchMusicScreen = ({ navigation, savedData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [apiSearch, searchResults, errorMessage] = useMusicResults("");

  return (
    <View>
      <SearchBar
        onTermSubmit={() => apiSearch(searchTerm)}
        searchTerm={searchTerm}
        onTermChange={setSearchTerm}
      ></SearchBar>

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <SearchResultList
          displayList={searchResults.tracks?.items}
          category="Songs"
        ></SearchResultList>
        <SearchResultList
          displayList={searchResults.artists?.items}
          category="Artists"
        ></SearchResultList>
        <SearchResultList
          category="Albums"
          displayList={searchResults.albums?.items}
        ></SearchResultList>
      </ScrollView>
      <Feather
        style={styles.featherIcon}
        name="heart"
        onPress={() =>
          navigation.navigate("Likes", {
            id: Math.random().toString(),
            data: savedData,
          })
        }
      ></Feather>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-around",
  },
  featherIcon: {
    fontSize: 35,
    color: "black",
    marginLeft: 170,
    marginRight: 163,
    borderWidth: 3,
    borderColor: "red",
    borderRadius: 5,
  },
});

export default SearchMusicScreen;

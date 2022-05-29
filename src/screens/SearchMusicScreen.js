import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import SearchResultList from "../components/SearchResultList";
import useMusicResults from "../hooks/useMusicResults";

const SearchMusicScreen = () => {
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
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchMusicScreen;

import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.searchBarBackground}>
      <Entypo name="beamed-note" style={styles.noteIcon} />
      <TextInput
        value={searchTerm}
        onChangeText={onTermChange}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputFieldStyle}
        placeholder="Search"
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarBackground: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 16,
    width: 250,
  },
  inputFieldStyle: {
    fontSize: 18,
    flex: 1,
  },
  noteIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;

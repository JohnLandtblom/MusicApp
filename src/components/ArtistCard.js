import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const ArtistCard = ({ artist, navigation, propData }) => {
  const [savedData, setSavedData] = useState([]);
  // console.log(savedData);

  const saveOnClick = () => {
    setSavedData((arr) => [artist.data.profile.name, ...arr]);
    propData(savedData);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Artist", {
            id: Math.random().toString(),
            data: artist.data,
          })
        }
      >
        {savedData.map((e) => (
          <Text style={styles.name}>{e}</Text>
        ))}

        <Image
          style={styles.image}
          source={artist.data.visuals.avatarImage.sources}
        ></Image>
      </TouchableOpacity>

      <View style={styles.titleAndIcon}>
        <Text style={styles.name}>{artist.data.profile.name}</Text>
        <TouchableOpacity onPress={saveOnClick}>
          <Feather name="heart" style={styles.featherIcon}></Feather>
        </TouchableOpacity>
      </View>
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
    marginTop: 5,
  },
  name: {
    fontWeight: "bold",
  },
  featherIcon: {
    fontSize: 25,
  },
  titleAndIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default withNavigation(ArtistCard);

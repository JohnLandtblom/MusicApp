import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
const ArtistCard = ({ artist, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Artist", { data: artist.data })}
      >
        <Image
          style={styles.image}
          source={artist.data.visuals.avatarImage.sources}
        ></Image>
      </TouchableOpacity>

      <View style={styles.titleAndIcon}>
        <Text style={styles.name}>{artist.data.profile.name}</Text>
        <Feather name="heart" style={styles.featherIcon}></Feather>
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

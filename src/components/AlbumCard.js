import React, { useContext } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";
import Context from "../context/context";

const AlbumCard = ({ album, navigation }) => {
  const { addAlbum } = useContext(Context);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Album", { data: album.data })}
      >
        <Image
          style={styles.image}
          source={album.data.coverArt.sources}
        ></Image>
      </TouchableOpacity>

      <View style={styles.titleAndIcon}>
        <Text style={styles.name}>{album.data.name}</Text>
        <TouchableOpacity onPress={() => addAlbum(album)}>
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

export default withNavigation(AlbumCard);

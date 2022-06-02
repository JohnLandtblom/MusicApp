import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Linking,
  FlatList,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Context from "../context/context";

const LikedSongs = () => {
  const { songs, deleteSong } = useContext(Context);

  return (
    <View>
      <Text style={styles.headLine}>Liked Songs</Text>
      <FlatList
        data={songs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listContainer}>
              <MaterialIcons
                style={styles.icon}
                size={30}
                name="delete-outline"
                onPress={() => deleteSong(index)}
              />
              <Image
                style={styles.image}
                source={item.data.albumOfTrack.coverArt.sources}
              ></Image>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.trackInfo}>
                  <Text style={styles.name}>{item.data.name}</Text>
                  <Text
                    style={styles.urlStyle}
                    onPress={() => Linking.openURL(`${item.data.uri}`)}
                  >
                    Spotify
                  </Text>
                </View>
              </ScrollView>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  headLine: {
    fontWeight: "bold",
    fontSize: 26,
    marginLeft: 30,
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  trackInfo: {
    display: "flex",
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 4,
    marginBottom: 5,
  },
  urlStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 12,
  },
  icon: {
    color: "black",
    marginRight: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LikedSongs;

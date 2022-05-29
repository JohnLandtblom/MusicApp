import React from "react";
import { Text, View, StyleSheet, Image, Linking } from "react-native";

const SongDetail = (data) => {
  const [song, setSong] = React.useState();
  React.useEffect(() => {
    if (data.navigation.state.params.data) {
      setSong(data.navigation.state.params.data);
    } else {
      setSong();
    }
  }, [data]);

  return (
    <View>
      {song ? (
        <View style={styles.container}>
          <Text style={styles.title}> {song.name}</Text>
          <Image
            style={styles.image}
            source={song.albumOfTrack.coverArt.sources}
          ></Image>

          <Text
            style={styles.urlStyle}
            onPress={() => Linking.openURL(`${song.uri}`)}
          >
            Press To Open Song In Spotify
          </Text>
        </View>
      ) : (
        <Text>No song set</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 4,
    marginBottom: 5,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  urlStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 12,
  },
});

export default SongDetail;

import React from "react";
import { Text, View, StyleSheet, Image, Linking } from "react-native";

const AlbumDetail = (data) => {
  const [album, setAlbum] = React.useState();
  React.useEffect(() => {
    if (data.navigation.state.params.data) {
      setAlbum(data.navigation.state.params.data);
    } else {
      setAlbum();
    }
  }, [data]);

  return (
    <View>
      {album ? (
        <View style={styles.container}>
          <Text style={styles.title}> {album.name}</Text>
          <Image style={styles.image} source={album.coverArt.sources}></Image>

          <Text
            style={styles.urlStyle}
            onPress={() => Linking.openURL(`${album.uri}`)}
          >
            Press To Open Album In Spotify
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
  headline: {
    marginTop: 2,
    fontWeight: "bold",
  },
  urlStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 12,
  },
});

export default AlbumDetail;

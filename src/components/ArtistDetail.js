import React from "react";
import { Text, View, StyleSheet, Image, Linking } from "react-native";

const ArtistDetail = (data) => {
  const [artist, setArtist] = React.useState();
  React.useEffect(() => {
    if (data.navigation.state.params.data) {
      setArtist(data.navigation.state.params.data);
    } else {
      setArtist();
    }
  }, [data]);

  return (
    <View>
      {artist ? (
        <View style={styles.container}>
          <Text style={styles.title}> {artist.profile.name}</Text>

          <Image
            style={styles.image}
            source={artist.visuals.avatarImage.sources}
          ></Image>

          <Text
            style={styles.urlStyle}
            onPress={() => Linking.openURL(`${artist.uri}`)}
          >
            Press To Open In Spotify
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
    marginTop: 5,
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

export default ArtistDetail;

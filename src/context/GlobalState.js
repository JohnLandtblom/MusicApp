import React from "react";
import Context from "./context";
export default class GlobalState extends React.Component {
  state = {
    artists: [],
    songs: [],
    albums: [],
  };

  addArtist = (artist) => {
    const artistList = [...this.state.artists, artist];
    this.setState({ artists: artistList });
    console.log("add Artist:" + artist);
    // console.log(artistList);
  };

  addSong = (song) => {
    const songList = [...this.state.songs, song];
    this.setState({ songs: songList });
    console.log("add song" + song);
  };

  addAlbum = (album) => {
    const albumList = [...this.state.albums, album];
    this.setState({ albums: albumList });
    console.log("add album" + album);
  };

  render() {
    return (
      <Context.Provider
        value={{
          artists: this.state.artists,
          songs: this.state.songs,
          albums: this.state.albums,
          addArtist: this.addArtist,
          addSong: this.addSong,
          addAlbum: this.addAlbum,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

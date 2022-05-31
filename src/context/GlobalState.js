import React from "react";
import Context from "./context";
export default class GlobalState extends React.Component {
  state = {
    artists: [],
    songs: [],
    album: [],
  };

  addArtist = (artist) => {
    //TODO: Add artist to state object
    console.log("add Artist:" + artist);
  };

  addSong = (song) => {
    //TODO: Add song to state object
  };

  addAlbum = (album) => {
    //TODO: Add album to state object
  };

  render() {
    return (
      <Context.Provider
        value={{
          artists: this.state.artists,
          songs: this.state.songs,
          album: this.state.album,
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

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
  };

  addSong = (song) => {
    const songList = [...this.state.songs, song];
    this.setState({ songs: songList });
  };

  addAlbum = (album) => {
    const albumList = [...this.state.albums, album];
    this.setState({ albums: albumList });
  };

  deleteArtist = (artist) => {
    this.setState(this.state.artists.splice(artist, 1));
  };

  deleteSong = (song) => {
    this.setState(this.state.songs.splice(song, 1));
  };

  deleteAlbum = (album) => {
    this.setState(this.state.albums.splice(album, 1));
  };

  idProvider = () => {
    var maxNumber = 777;
    var randomNumber = Math.floor(Math.random() * maxNumber + 1);
    return randomNumber;
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
          deleteArtist: this.deleteArtist,
          deleteSong: this.deleteSong,
          deleteAlbum: this.deleteAlbum,
          idProvider: this.idProvider,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

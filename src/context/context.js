import React from "react";

export default React.createContext({
  artists: [],
  songs: [],
  albums: [],
  addArtist: (artist) => {},
  addSong: (song) => {},
  addAlbum: (album) => {},
});

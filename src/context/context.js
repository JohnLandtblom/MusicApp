import React from "react";

export default React.createContext({
  artists: [],
  songs: [],
  album: [],
  addArtist: (artist) => {},
  addSong: (song) => {},
  addAlbum: (album) => {},
});

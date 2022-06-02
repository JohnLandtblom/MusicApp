import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AlbumDetail from "./src/components/AlbumDetail";
import ArtistDetail from "./src/components/ArtistDetail";
import SongDetail from "./src/components/SongDetail";
import LikedSongsScreen from "./src/screens/LikedSongsScreen";
import SearchMusicScreen from "./src/screens/SearchMusicScreen";
import GlobalState from "./src/context/GlobalState";

const navigator = createStackNavigator(
  {
    Search: SearchMusicScreen,
    Artist: ArtistDetail,
    Album: AlbumDetail,
    Song: SongDetail,
    Likes: LikedSongsScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Shazom",
    },
  }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <GlobalState>
      <App></App>
    </GlobalState>
  );
};

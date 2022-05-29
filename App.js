import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AlbumDetail from "./src/components/AlbumDetail";
import ArtistDetail from "./src/components/ArtistDetail";
import SongDetail from "./src/components/SongDetail";
import SearchMusicScreen from "./src/screens/SearchMusicScreen";

const navigator = createStackNavigator(
  {
    Search: SearchMusicScreen,
    Artist: ArtistDetail,
    Album: AlbumDetail,
    Song: SongDetail,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Find Your Song",
    },
  }
);

export default createAppContainer(navigator);

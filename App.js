import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchMusicScreen from "./src/screens/SearchMusicScreen";

const navigator = createStackNavigator(
  {
    Search: SearchMusicScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "MusicSearch",
    },
  }
);

export default createAppContainer(navigator);

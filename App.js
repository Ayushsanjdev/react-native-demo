import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentsScreen: ComponentsScreen,
  },
  {
    initialRouteName: "Home", // here we can change the default route!
    defaultNavigationOptions: {
      title: "Ayush sanj' RN App",
    },
  }
);

export default createAppContainer(navigator);

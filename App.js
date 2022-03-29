import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListComponent from "./src/screens/ListComponent";
import ImageComponent from "./src/screens/ImageComponent";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import ColorCounter from "./src/Container/ColorCounter";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListComponent,
    Image: ImageComponent,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen,
    ColorCounter: ColorCounter
  },
  {
    initialRouteName: "Home", // here we can change the default route!
    defaultNavigationOptions: {
      title: "Ayush sanj' RN App",
    },
  }
);

export default createAppContainer(navigator);

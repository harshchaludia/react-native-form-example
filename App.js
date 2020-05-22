import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Index from "./src/screens/Index";
import Submission from './src/screens/Submission';

const nav = createStackNavigator(
  {
    Index: Index,
    Success: Submission
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Form-Example",
      headerStyle: {
        backgroundColor: '#20263f'
      }
    }
  }
);

export default createAppContainer(nav);

import { createBottomTabNavigator, createAppContainer , createSwitchNavigator} from "react-navigation";
import React from 'react';
import News from "./src/screens/News/News.js";
import Search from "./src/screens/Search/Search.js";
import Messages from "./src/screens/Messages/Messages.js";
import Notification from "./src/screens/Notification/Notification.js";
import Menu from "./src/screens/Menu/Menu.js";
import Icon from "react-native-vector-icons/MaterialIcons";

const BottomNavigator = createBottomTabNavigator({
  News: {
    screen: News,
    navigationOptions: {
      tabBarLabel: "News",
      tabBarIcon: ({ tintColor }) => <Icon name="subtitles" size={24} />
    }
  },
  Search: {
    screen: Search,
    navigationOptions: {
      tabBarLabel: "Search",
      showIcon: true,
      tabBarIcon: ({ tintColor }) => <Icon name="search" size={24} />
    }
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarLabel: "Messages",
      tabBarIcon: ({ tintColor }) => <Icon name="message" size={24} />
    }
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      tabBarLabel: "Notification",
      tabBarIcon: ({ tintColor }) => <Icon name="notifications" size={24} />
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      tabBarLabel: "Menu",
      tabBarIcon: ({ tintColor }) => <Icon name="menu" size={24} />
    }
  }
},
{
    initialRouteName: "News",
    backBehavior: "none"
  });

const NavigatorContainer = createAppContainer(BottomNavigator);

export default NavigatorContainer;

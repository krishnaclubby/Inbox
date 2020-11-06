import React from 'react';
import { View, Image, TouchableNativeFeedback, Text } from 'react-native';
import { createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';  
import LocS1 from './src/design_V1/InboxMessages';
import LocS2 from './src/design_V2/InboxMessages1';
import LocS3 from './src/design_V2/InboxMessages1';
import LocS4 from './src/design_V2/InboxMessages1';

// const ROOT = createStackNavigator({
//   LOCS1: {
//     screen: LocS1,
//     navigationOptions: {
//       headerShown: false
//     }
//   },


// });

const HOME = createMaterialBottomTabNavigator({
  LOCS1: {
    screen: LocS1,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <FontAwesome style={{}} size={25} name={'home'}/>),
        activeColor: '#fff',  inactiveColor: '#46f6d7', 
      // tabBarVisible: navigation.state.index == 0
    })
  },
  LOCS2: {
    screen: LocS2,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <FontAwesome style={{}} size={25} name={'calendar-o'}/>),
        activeColor: '#fff',  inactiveColor: '#46f6d7', 
      // tabBarVisible: navigation.state.index == 0
    })
  },
  LOCS3: {
    screen: LocS3,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <FontAwesome style={{}} size={25} name={'inbox'}/>),
        activeColor: '#fff',  inactiveColor: '#46f6d7', 
      // tabBarVisible: navigation.state.index == 0
    })
  },
  LOCS4: {
    screen: LocS4,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, activeTintColor }) => (
        <FontAwesome style={{}} size={25} name={'users'}/>),
        activeColor: '#fff',  inactiveColor: '#46f6d7', 
      // tabBarVisible: navigation.state.index == 0
    })
  },
  
  
},
{  
  // initialRouteName: LocS1,  
  activeColor: '#f0edf6',  
  inactiveColor: '#226557',  
  barStyle: { backgroundColor: '#fff' },  
},  

);


const Container = createAppContainer(HOME);

export default class App extends React.Component {


  componentDidMount() {
    // this.state = store.getState();
    console.log("app mounted");
  }

  componentWillUnmount() {
    console.log("app unmounted");
  }

  render() {
    return (
      <Container>

      </Container>
    )
  }
};

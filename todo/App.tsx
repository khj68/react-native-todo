import 'react-native-gesture-handler';

import React, { 
  ReactElement,
  useState,
} from 'react';

import { NavigationContainer, NavigationContainerProps, ParamListBase, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextInput } from 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type ParamList = {
  [itemId: number]: object | undefined;
  [post: string]: object | undefined;
  // [otherParam: string]: object | undefined;
}

type Props = {
  navigation: StackNavigationProp<ParamListBase, 'Home'>;
  route: RouteProp<ParamList, 'Details'>;
}


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>

  );
}
const Tab = createBottomTabNavigator();


function App(): ReactElement {  
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'pink',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

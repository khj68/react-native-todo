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

type ParamList = {
  [itemId: number]: object | undefined;
  [post: string]: object | undefined;
  // [otherParam: string]: object | undefined;
}

type Props = {
  navigation: StackNavigationProp<ParamListBase, 'Home'>;
  route: RouteProp<ParamList, 'Details'>;
}


const Stack = createStackNavigator();

function HomeScreen({ navigation, route }: Props): ReactElement {
  React.useEffect(() => {
    if (route.params?.post) {
      console.log('post existed');
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button
        title="Update the title"
        onPress={() => 
          navigation
          .setOptions({ 
            title: '안녕타이틀',
            headerStyle: { backgroundColor: '#f4511e', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', },
          })}
      />
    </View>
  );
}

function CreatePostScreen({ navigation, route }: Props) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
}

function DetailsScreen({ route, navigation }: Props) {
  const { itemId, otherParam }: ParamList = route.params as ParamList;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button title="Go to Details... again" 
              onPress={() => 
                navigation.push('Details', {
                  itemId: Math.floor(Math.random() * 100),
                  otherParam: "other and other",
                })
              }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
}

function App(): ReactElement {
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={
          { 
            title: '안녕타이틀',
            headerStyle: { backgroundColor: '#f4511e', },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold', },
            headerRight: () => (
              <Button
                title="Info"
                onPress={() => alert('This is a button!')}
                color="#000"
              />
            ),
          }
        }
        >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          // options={{
          //   headerRight: () => (
          //     <Button
          //       title="Info"
          //       onPress={() => alert('This is a button!')}
          //       color="#000"
          //     />
          //   )}}
          
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{ title: 'Overview' }}/>
      </Stack.Navigator>
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

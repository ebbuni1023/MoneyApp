import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Friend from '../screens/Friend.js'
import { TouchableOpacity, Text } from 'react-native'
import auth from '@react-native-firebase/auth'
import Profile from '../screens/Profile'
import CreateChatRoom from '../screens/CreateChatRoom'
import Messages from '../screens/Messages'

const Stack = createStackNavigator()
async function logOut() {
    try {
      await auth().signOut()
    } catch (e) {
      console.error(e)
    }
  }
export default function SignInStack({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name='ChatRoom'
        component={Friend}
        options={({ navigation }) => ({
          title: 'Chat Room',
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={() => navigation.navigate(CreateChatRoom)}>
              <Text>+</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }} onPress={logOut}>
              <Text>Log out</Text>
            </TouchableOpacity>
          )
        })}
        />
        <Stack.Screen
          name='CreateChatRoom'
          component={CreateChatRoom}
          options={{
            title: 'Create a room'
          }}
        />
        <Stack.Screen
          name='Messages'
          component={Messages}
          options={({ route }) => ({
            title: route.params.thread.name
          })}
        />
        <Stack.Screen name='Profile' component={Profile}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

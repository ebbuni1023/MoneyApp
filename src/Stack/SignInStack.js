import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Friend from '../screens/Friend.js'
import { TouchableOpacity, Text } from 'react-native'
import auth from '@react-native-firebase/auth'
import Profile from '../screens/Profile'
import Chat from '../screens/Chat.js'
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
            options={{
                title: 'Chat Room',
                headerRight: () => (
                <TouchableOpacity style={{ marginRight: 10 }} onPress={logOut}>
                <Text>Logout</Text>
                </TouchableOpacity>
                ),
            }}
            />
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='Chat' component={Chat}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

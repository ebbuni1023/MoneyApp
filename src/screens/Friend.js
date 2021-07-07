import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import auth from '@react-native-firebase/auth'
import Profile from './Profile'

export default function Friend({navigation}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}>
        <Button 
        title= 'change your profile'
        onPress = {() => navigation.navigate('Profile')}/>
      </TouchableOpacity>
      <Text style={styles.title}>
        You haven't joined any chat rooms yet :'(
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dee2eb'
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500'
  }
})

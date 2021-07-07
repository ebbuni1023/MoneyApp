import React, { useState, useEffect, createContext } from 'react';
import SignInStack from '../Stack/SignInStack';
import SignOutStack from '../Stack/SignOutStack';
import auth from '@react-native-firebase/auth';


export const AuthContext = createContext(null)

export default function AuthNavigator({navigation}) {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState(null)
  
    // Handle user state changes
    function onAuthStateChanged(result) {
      setUser(result)
      if (initializing) setInitializing(false)
    }
  
    useEffect(() => {
      const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged)
  
      // unsubscribe on unmount
      return authSubscriber
    }, [])
  
    if (initializing) {
      return null
    }
  
    return user ? (
      <AuthContext.Provider value={user}>
        <SignInStack />
      </AuthContext.Provider>
    ) : (
      <SignOutStack />
    )
  }
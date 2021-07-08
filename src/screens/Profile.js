import React, { Component, useState, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput,Button,TouchableOpacity } from 'react-native'
import Friend from './Friend';
import Messages from './Messages';

export default function Profile({navigation}) {

    const [name, setName] = useState('');

        return (
            <View>
                <Text style={styles.title}>Enter Your name</Text>
                <TextInput
                style={styles.nameInput}
                autoFocus
                type='name'
                value={name}
                onChangeText={(text) => setName(text)}
                />
                <Button 
                onPress = {() => navigation.navigate('Friend')}
                title="Enter"
                />               
            </View>
        )
    }


const offset = 24;
const styles = StyleSheet.create({
    title: {
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
    },
    nameInput: {
        height: offset * 2,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1,
    },
    buttonText: {
        marginLeft: offset,
        fontSize: offset,
    }
});

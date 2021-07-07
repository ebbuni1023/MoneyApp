import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export class Chat extends Component {

    state = {
        name: '',
    };

    onChangeText = name => this.setState({ name });
    onPress = () => this.props.navigation.navigate('Chat', {name: this.state.name});
    
    render() {
        return (
            <View>
                <Text style={styles.title}>Enter Your name</Text>
                    <TextInput
                    style={styles.nameInput}
                    onChangeText={this.onChangeText}
                    value={this.state.name}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {

    }
});
export default Chat

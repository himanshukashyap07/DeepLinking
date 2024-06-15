import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const MessageOpen = () => {
    function msgUrl() {
        const phoneNumber = '+919560517521'
        const url = `sms:${phoneNumber}`;
        Linking.openURL(url);
    }
    return (
        <View style={{marginTop:20}}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={msgUrl}
                >
                    <Text style={styles.buttonTxt}>Click me for Message</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt: {
        color: 'white',
        fontSize: 15
    },
})

export default MessageOpen
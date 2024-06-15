import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const InstagramOpen = () => {
    function InstaUrl() {
        let userName = 'himanshukashyap0719';
        Linking.openURL(`instagram://user?username=${userName}`);
    }
    return (
        <View style={{marginTop:20}}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={InstaUrl}
                >
                    <Text style={styles.buttonTxt}>Click me to open instagram</Text>
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
        backgroundColor: '#C062FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt: {
        color: 'white',
        fontSize: 15
    },
})

export default InstagramOpen
import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const GmailOpen = () => {
    function gmailUrl() {
        const GmailId = 'kashyapji908@gmail.com'
        Linking.openURL(`mailto:${GmailId}`);
    }
    return (
        <View style={{marginTop:20}}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={gmailUrl}
                >
                    <Text style={styles.buttonTxt}>Click me to send Gmail</Text>
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
        backgroundColor: '#07FFDD',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt: {
        color: 'black',
        fontSize: 15
    },
})

export default GmailOpen
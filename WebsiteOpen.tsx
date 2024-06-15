import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const WebsiteOpen = () => {
    function webSiteOpen(websiteLink: string) {
        Linking.openURL(websiteLink)
    }
    return (
        <View style={{marginTop:20}}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => webSiteOpen("https://reactnative.dev/docs/components-and-apis")}
                >
                    <Text style={styles.buttonTxt}>Click me to open React website</Text>
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
        backgroundColor: '#49C3FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt: {
        color: 'black',
        fontSize: 15
    },
})

export default WebsiteOpen
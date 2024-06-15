import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const PhoneCall = () => {
    function PhoneUrl() {
        const phoneNumber = '+919560517521'
        const url = `tel:${phoneNumber}`;
        Linking.openURL(url);
        
    }
    return (
        <View style={{marginTop:20}}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={PhoneUrl}
                >
                    <Text style={styles.buttonTxt}>Click me for Calling</Text>
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
        backgroundColor: '#0EFF83',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt: {
        color: 'black',
        fontSize: 15
    },
})

export default PhoneCall
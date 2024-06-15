import { View, Text, Linking, StyleSheet, TouchableOpacity, } from 'react-native'
import React from 'react'


const PaymentOpen = () => {
    function paymentUrl() {
        const upiAddress = '8076067865@ptyes'; // Replace with actual Paytm UPI address
        const url = `upi://pay?pa=${upiAddress}&pn=+918076067865&cu=INR`;
        Linking.openURL(url);
    }
    return (
        <View style={{ marginTop: 20 }}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={paymentUrl}
                >
                    <Text style={styles.buttonTxt}>Click me to send money</Text>
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
        backgroundColor: '#8DFF9A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt: {
        color: 'black',
        fontSize: 15
    },
})

export default PaymentOpen
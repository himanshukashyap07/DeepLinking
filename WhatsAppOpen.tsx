import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const WhatsAppOpen = () => {
  function openWhatsApp() {
    Linking.openURL('whatsapp://app');
    const whatsappNo = '+918076067865'; // Replace with the desired phone number
    const whatsappMsg = 'this text is written in code'; // Replace with your message
    Linking.openURL(`whatsapp://send?phone=${whatsappNo}&text=${whatsappMsg}`);
  }
  return (
    <View>
      <Text style={{ marginBottom: 20, fontSize: 50, textAlign: 'center' }}>App Linking</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={openWhatsApp}
        >
          <Text style={styles.buttonTxt}>Click me to open Whatsapp</Text>
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
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTxt: {
    color: 'white',
    fontSize: 15
  },
})

export default WhatsAppOpen

/**
  // To open WhatsApp directly:
Linking.openURL('whatsapp://app');

// To open WhatsApp with a specific phone number and message:
const whatsappNo = '1234567890'; // Replace with the desired phone number
const whatsappMsg = 'Hello, this is a test message!'; // Replace with your message
Linking.openURL(`whatsapp://send?phone=${whatsappNo}&text=${whatsappMsg}`);
 */
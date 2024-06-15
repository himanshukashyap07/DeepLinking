import { View, Text, Linking, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const TelegramOpen = () => {
  function teleUrl() {
    const telegramUrl = 'tg://resolve?domain=your_telegram_username'
    Linking.openURL(telegramUrl)

  }
  return (
    <View  style={{marginTop:20}}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={teleUrl}
        >
          <Text style={styles.buttonTxt}>Click me to open Telegram</Text>
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
    backgroundColor: '#81D5FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonTxt: {
    color: 'Black',
    fontSize: 15
  },
})

export default TelegramOpen


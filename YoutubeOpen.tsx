import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const YoutubeOpen = () => {
    function youtubeUrl() {
        const ChanelId = 'UCRn2abXwn3iqdPMpFFclLbA';
        Linking.openURL('vnd.youtube://channel/' + ChanelId);
    }
    return (
        <View style={{marginTop:20}}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={youtubeUrl}
                >
                    <Text style={styles.buttonTxt}>Click me to open Youtube</Text>
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
        backgroundColor: '#E3FF5B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTxt: {
        color: 'black',
        fontSize: 15
    },
})

export default YoutubeOpen
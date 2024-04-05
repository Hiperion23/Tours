import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';

export function Buttons ({onPress}) {
  return (
    <View style ={ styles.container }>
        <TouchableOpacity
        style = {{ 
            ...styles.button,
            backgroundColor: '#3B9AE0'
        }}
        onPress={onPress}
        >
            <Text
            style = {{ 
                ...styles.buttonText,
                color: '#f1f1f1'
            }}
            >
            ¡Vamos!
            </Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-start', 
        padding: 60,
    },
    button: {
        alignSelf: 'flex-end',
        borderRadius: 30,
        borderTopLeftRadius: 0,
        paddingVertical: 15,
        width: '40%',
        position: 'absolute',
        bottom: '15%',
        right: '25%'
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold'


    }
})
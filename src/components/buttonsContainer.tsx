import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonsContainer = ({children}:{children:any}) => {
  return (
    <View style={styles.buttonContainer}>
        {children}
    </View>
  )
}

export default ButtonsContainer

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
      },
})
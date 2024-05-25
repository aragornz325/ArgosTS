import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const inputFormik = () => {
  return (
    <View>
      <Text>inputFormik</Text>
    </View>
  )
}

export default inputFormik

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
      },
      sectionTitle: {
        fontSize: 24,
        marginBottom: 16,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
      },
      error: {
        color: 'red',
        marginBottom: 16,
      },
})
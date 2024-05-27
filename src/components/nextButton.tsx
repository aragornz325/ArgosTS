import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-paper'

import theme from '../theme'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'

type NextButtonProps = {
    navigation: StackNavigationProp<ParamListBase>
    pagaName: string
    disabled: boolean
    buttonStyle?: ViewStyle;
  }

const NextButton: React.FC<NextButtonProps>= ({navigation, buttonStyle, pagaName, disabled}) => {
  return (
    <TouchableOpacity
    style={[styles.button, buttonStyle, disabled && styles.buttonDisabled]}
    onPress={() => navigation.navigate(pagaName)}
    disabled={disabled}>
      <Text style={styles.buttonText}>Siguiente</Text>
    </TouchableOpacity>
  )
}

export default NextButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
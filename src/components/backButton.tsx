import React from 'react'
import { StyleSheet, Text, Button, TouchableOpacity, TextStyle } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamListBase } from '@react-navigation/native'

type BackButtonProps = {
  navigation: StackNavigationProp<ParamListBase>
  textStyle?: TextStyle;
}

const BackButton: React.FC<BackButtonProps> = ({ navigation, textStyle }) => {
  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={()=>navigation.goBack()}>
        <Text 
          style={[styles.buttonText, textStyle]}>Atras</Text>
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    button:{
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
  });


import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'

interface FormContainerProps {
    children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({children}) => {
  return (
    <View style={styles.formContainer}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        padding: 16,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 5,
            },
        }),
    },
})



export default FormContainer
import { Formik } from "formik";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Platform } from "react-native";


import FormInputValue from "../../components/formInputValue";
import LoginValidationSchema from "./validationSchema/validationSchema";
import theme from "../../theme";
import {SignInValues} from "./interfaces/signIn.interface";
import useSignIn from "./hooks/useSignIn";


export default function SignIn () {
  const initValues: SignInValues = {
    email: "",
    password: ""
      };
    const {handleSubmit} = useSignIn();
    return (
      <View style={styles.container}>
        <Formik
            initialValues={initValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={LoginValidationSchema}
        >
          {({ handleSubmit }) => (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                  <FormInputValue 
                  name="email" 
                  placeholder="Ingrese su Email" />

                  <FormInputValue 
                  name="password" 
                  placeholder="Ingrese su password" 
                  secureTextEntry />
                </View>
              <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginTop: 20,
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 5,   
    },
    buttonText: {
        fontFamily: theme.fonts.main,
        color: theme.colors.textPrimary,
        fontSize: 16,
        textAlign: "center",
      },
      formContainer: {
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
                elevation: 10,
            },
        }),
    },
});
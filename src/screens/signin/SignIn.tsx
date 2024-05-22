import { Form, Formik } from "formik";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import FormInputValue from "../../components/formInputValue";
import LoginValidationSchema from "./validationSchema/validationSchema";
import theme from "../../theme";


const initValues ={
    email: "",
    password: ""
}



export default function SignIn() {

    const handleSubmit = ({values}:{values:{email:string, password:string}}) => {
        console.log(values);
    };

    return (
      <View style={styles.container}>
        <Formik
            initialValues={initValues}
            onSubmit={(values: { email: string; password: string; }) => handleSubmit({values})}
            validationSchema={LoginValidationSchema}
        >
          {({ handleSubmit }) => (
            <View>
              <View>
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
});
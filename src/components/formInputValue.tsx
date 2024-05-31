import React from "react";
import { useField } from "formik";
import StyledTextInput from "./styledTextInput";
import StyledText from "./styledText";
import { StyleSheet, View } from "react-native";

import theme from "../theme";


const FormInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    return (
      <>
        <StyledTextInput
          error={meta.error}
          name={name}
          value={field.value}
          onChangeText={(value:string) => helpers.setValue(value)}
          {...props}
        />
        <StyledText style={[styles.error, !meta.error && styles.errorHidden ]}>
          {meta.error || " "} {/* Agregamos un espacio en caso de que no haya error */}
        </StyledText>
      </>
    );
  };

  const styles = StyleSheet.create({
    error: {
      color: theme.colors.error,
      fontSize: 12,
      marginBottom: 8,
      marginTop: -5,
    },
    errorHidden: {
      opacity: 0, // Oculta el espacio pero mantiene el espacio ocupado
  },
  })


export default FormInputValue;

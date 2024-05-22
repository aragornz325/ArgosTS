import { useField } from "formik";
import StyledTextInput from "./styledTextInput";
import StyledText from "./styledText";
import { StyleSheet } from "react-native";



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
        {meta.error ? (
          <StyledText style={styles.error }>{meta.error}</StyledText>
        ) : null}
      </>
    );
  };

  const styles = StyleSheet.create({
    error: {
      color: "red",
      fontSize: 12,
      marginBottom: 20,
      marginTop: -5
    },
    form: {
      margin: 12
    }
  })


export default FormInputValue;

import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormikProps } from 'formik';
import { FormValues } from '../interfaces/ticket.interface'; // Importa tu tipo de formulario
import { DriverDetailsProps } from '../interfaces/ticket.interface';

const DriverDetails: React.FC<DriverDetailsProps> = ({
    navigation,
    values,
    handleChange,
    handleBlur,
    errors,
    touched
  }) => {
    const isNextButtonDisabled = !!errors.name || !!errors.email || !values.name || !values.email;
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Datos del conductor</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre del conductor"
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
        />
        {errors.name && touched.name ? <Text style={styles.error}>{errors.name}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        {errors.email && touched.email ? <Text style={styles.error}>{errors.email}</Text> : null}
        <Button 
        title="Siguiente" 
        onPress={() => navigation.navigate('CarDetails')}
        disabled= {isNextButtonDisabled} />
      </View>
    );
  };

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
});

export default DriverDetails;

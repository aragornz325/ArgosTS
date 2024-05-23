import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormikErrors, FormikProps, FormikTouched } from 'formik';
import { FormValues } from '../interfaces/ticket.interface';
import { NavigationProp } from '@react-navigation/native';
import { CarDetailsProps } from '../interfaces/ticket.interface'; // Importa tu tipo de formulario

const CarDetails: React.FC<CarDetailsProps> = ({
  navigation,
  values,
  handleChange,
  handleBlur,
  errors,
  touched
}) => {

    const isNextButtonDisabled = 
    !!errors.licenseNumber || 
    !!errors.carColor || 
    !!errors.carMake || 
    !!errors.carModel || 
    !values.licenseNumber || 
    !values.carColor || 
    !values.carMake || 
    !values.carModel;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Datos del auto</Text>
      <TextInput
        style={styles.input}
        placeholder="Número de patente"
        onChangeText={handleChange('licenseNumber')}
        onBlur={handleBlur('licenseNumber')}
        value={values.licenseNumber}
      />
      {errors.licenseNumber && touched.licenseNumber ? <Text style={styles.error}>{errors.licenseNumber}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Color del auto"
        onChangeText={handleChange('carColor')}
        onBlur={handleBlur('carColor')}
        value={values.carColor}
      />
      {errors.carColor && touched.carColor ? <Text style={styles.error}>{errors.carColor}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Fabricante del auto"
        onChangeText={handleChange('carMake')}
        onBlur={handleBlur('carMake')}
        value={values.carMake}
      />
      {errors.carMake && touched.carMake ? <Text style={styles.error}>{errors.carMake}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Modelo del auto"
        onChangeText={handleChange('carModel')}
        onBlur={handleBlur('carModel')}
        value={values.carModel}
      />
      {errors.carModel && touched.carModel ? <Text style={styles.error}>{errors.carModel}</Text> : null}
      <Button 
      title="Siguiente" 
      onPress={() => navigation.navigate('InfractionDate')} 
      disabled={isNextButtonDisabled}/>
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

export default CarDetails;

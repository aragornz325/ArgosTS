import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { CarDetailsProps } from '../interfaces/ticket.interface';
import FormInputValue from '../../../components/formInputValue';

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
      <FormInputValue
        name="licenseNumber"
        placeholder="Número de patente"
        onChangeText={handleChange('licenseNumber')}
        onBlur={handleBlur('licenseNumber')}
        value={values.licenseNumber}
      />
     
      <FormInputValue
        name="carColor"
        placeholder="Color del auto"
        onChangeText={handleChange('carColor')}
        onBlur={handleBlur('carColor')}
        value={values.carColor}
      />
      
      <FormInputValue
        name="carMake"
        placeholder="Fabricante del auto"
        onChangeText={handleChange('carMake')}
        onBlur={handleBlur('carMake')}
        value={values.carMake}
      />
      
      <FormInputValue
        name="carModel"
        placeholder="Modelo del auto"
        onChangeText={handleChange('carModel')}
        onBlur={handleBlur('carModel')}
        value={values.carModel}
      />
      
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
});

export default CarDetails;

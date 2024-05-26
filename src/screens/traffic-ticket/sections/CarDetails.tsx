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
    !!errors.plateNumber || 
    !!errors.color || 
    !!errors.vehicleBrand || 
    !!errors.vehicleModel || 
    !values.plateNumber || 
    !values.color || 
    !values.vehicleBrand || 
    !values.vehicleModel;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Datos del auto</Text>
      <FormInputValue
        name="plateNumber"
        placeholder="Número de patente"
        onChangeText={handleChange('plateNumber')}
        onBlur={handleBlur('plateNumber')}
        value={values.plateNumber}
      />
     
      <FormInputValue
        name="color"
        placeholder="Color del auto"
        onChangeText={handleChange('color')}
        onBlur={handleBlur('color')}
        value={values.color}
      />
      
      <FormInputValue
        name="vehicleBrand"
        placeholder="Fabricante del auto"
        onChangeText={handleChange('vehicleBrand')}
        onBlur={handleBlur('vehicleBrand')}
        value={values.vehicleBrand}
      />
      <FormInputValue
        name="vehicleModel"
        placeholder="Modelo del auto"
        onChangeText={handleChange('vehicleModel')}
        onBlur={handleBlur('vehicleModel')}
        value={values.vehicleModel}
      />
      <FormInputValue
        name="typeOfService"
        placeholder="tipo de servicio"
        onChangeText={handleChange('typeOfService')}
        onBlur={handleBlur('typeOfService')}
        value={values.typeOfService}
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

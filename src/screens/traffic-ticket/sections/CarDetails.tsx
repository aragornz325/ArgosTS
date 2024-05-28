import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'
import { CarDetailsProps } from '../interfaces/ticket.interface';
import FormInputValue from '../../../components/formInputValue';
import NextButton from '../../../components/nextButton';
import BackButton from '../../../components/backButton';
import ButtonsContainer from '../../../components/buttonsContainer';
import FormContainer from '../../../components/FormContainer';
import {VehicleBrands, ServiceTypes, getYearsArray} from '../../../utils/pickersCar';



const CarDetails: React.FC<CarDetailsProps> = ({
  navigation,
  values,
  handleChange,
  handleBlur,
  errors,
}) => {
    const years = getYearsArray();
    const isNextButtonDisabled = 
    !!errors.plateNumber || 
    !!errors.color || 
    !!errors.vehicleBrand || 
    !!errors.vehicleModel || 
    !values.plateNumber || 
    !values.color || 
    !values.vehicleBrand 
  
    return (
    
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      
      <FormContainer>
    
        <Text style={styles.sectionTitle}>Datos del Auto</Text>
          <View>
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
              name="vehicleModel"
              placeholder="Modelo del auto"
              onChangeText={handleChange('vehicleModel')}
              onBlur={handleBlur('vehicleModel')}
              value={values.vehicleModel}
            />

            <RNPickerSelect
              placeholder={{ label: 'Selecciona un año...', value: null }}
              onValueChange={(itemValue, itemIndex) => handleChange('modelYear')(itemValue)}
              items={years.map(year => ({ label: year.toString(), value: year.toString() }))}
            />
            
            <RNPickerSelect
              placeholder={{ label: 'Selecciona una marca...', value: null }}
              onValueChange={(itemValue, itemIndex) => handleChange('vehicleBrand')(itemValue)}
              items={VehicleBrands.map(brand => ({ label: brand, value: brand }))}
            />
            <RNPickerSelect
              placeholder={{ label: 'Selecciona un tipo de servicio...', value: null }}
              onValueChange={(itemValue, itemIndex) => handleChange('typeOfService')(itemValue)}
              items={ServiceTypes.map(service => ({ label: service, value: service }))}
            />

          </View>
      </FormContainer>
      <ButtonsContainer>
        <BackButton 
          navigation={navigation} />
        <NextButton 
          navigation={navigation} 
          pagaName="InfractionDate"
          disabled={isNextButtonDisabled} />
      </ButtonsContainer>
    </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 16,
  }
});

export default CarDetails;

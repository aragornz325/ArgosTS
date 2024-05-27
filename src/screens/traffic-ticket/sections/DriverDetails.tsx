import React, { useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import { DriverDetailsProps } from '../interfaces/ticket.interface';
import useTrafficTicketForm from '../hooks/useTrafficTiketForm';
import { useTrafficTicketStore } from '../../../store/useTicketStore';
import FormInputValues from '../../../components/formInputValue';
import BackButton from '../../../components/backButton';
import NextButton from '../../../components/nextButton';
import ButtonsContainer from '../../../components/buttonsContainer';
import FormContainer from '../../../components/FormContainer';


const DriverDetails: React.FC<DriverDetailsProps> = ({
    navigation,
    values,
    handleChange,
    handleBlur,
    errors,
}) => {
    
    const { handleGetCurrentLocation } = useTrafficTicketForm();
    useEffect(() => {
        handleGetCurrentLocation()
    }, []); 
    const latitude = useTrafficTicketStore(state => state.latitude);
    const longitude = useTrafficTicketStore(state => state.longitude);
    useEffect(() => {
        handleChange('latitude')(latitude);
        handleChange('longitude')(longitude);
      }, [latitude, longitude]);

      const isNextButtonDisabled = 
    !!errors.driverEmail

    return (
        <KeyboardAvoidingView 
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
            <FormContainer>
            <Text style={styles.sectionTitle}>Datos del conductor</Text>
            <FormInputValues
                name="driverName"
                placeholder="Nombre del conductor"
                onChangeText={handleChange('driverName')}
                onBlur={handleBlur('driverName')}
                value={values.driverName}
            />
            <FormInputValues
                name="driverEmail"
                placeholder="Email del conductor"
                onChangeText={handleChange('driverEmail')}
                onBlur={handleBlur('driverEmail')}
                value={values.driverEmail}
            />
            <FormInputValues
                name="driverPhone"
                placeholder="telefono del conductor"
                onChangeText={handleChange('driverPhone')}
                onBlur={handleBlur('driverPhone')}
                value={values.driverPhone}
            />
            <FormInputValues
                name="driverLicenseNumber"
                placeholder="Numero de licencia del conductor"
                onChangeText={handleChange('driverLicenseNumber')}
                onBlur={handleBlur('driverLicenseNumber')}
                value={values.driverLicenseNumber}
            />
            <FormInputValues
                name="latitude"
                style={{ display: 'none' }} 
                onChangeText={handleChange('latitude')}
                onBlur={handleBlur('latitude')}
                value={values.latitude}
            />
            <FormInputValues
                name="longitude"
                style={{ display: 'none' }} 
                onChangeText={handleChange('longitude')}
                onBlur={handleBlur('longitude')}
                value={values.longitude}
            />
            </FormContainer>
            <ButtonsContainer>
                <BackButton 
                    navigation={navigation} />
                <NextButton 
                    navigation={navigation} 
                    pagaName="CarDetails"
                    disabled={isNextButtonDisabled}
                    />
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
  },
});

export default DriverDetails;

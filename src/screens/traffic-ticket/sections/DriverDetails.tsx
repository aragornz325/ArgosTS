import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { DriverDetailsProps } from '../interfaces/ticket.interface';
import useTrafficTicketForm from '../hooks/useTrafficTiketForm';
import { useTrafficTicketStore } from '../../../store/useTicketStore';
import FormInputValues from '../../../components/formInputValue';

const DriverDetails: React.FC<DriverDetailsProps> = ({
    navigation,
    values,
    handleChange,
    handleBlur,
    errors,
    touched
}) => {
    
    const { handleGetCurrentLocation } = useTrafficTicketForm();
    useEffect(() => {
        handleGetCurrentLocation()
    }, []); 
    const latitude = useTrafficTicketStore(state => state.latitude);
    const longitude = useTrafficTicketStore(state => state.longitude);
    useEffect(() => {
        console.log('latitude', latitude);
        console.log('longitude', longitude);
        handleChange('latitude')(latitude);
        handleChange('longitude')(longitude);
      }, [latitude, longitude]);

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Datos del conductor</Text>
            <FormInputValues
                name="name"
                placeholder="Nombre del conductor"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.driverName}
            />
            <FormInputValues
                name="email"
                placeholder="Email del conductor"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.driverEmail}
            />
            <FormInputValues
                name="phone"
                placeholder="telefono del conductor"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.driverPhone}
            />
            <FormInputValues
                name="licenseNumber"
                placeholder="Numero de licencia del conductor"
                onChangeText={handleChange('licenseNumber')}
                onBlur={handleBlur('licenseNumber')}
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
            <Button
                title="Siguiente"
                onPress={() => navigation.navigate('CarDetails')}
                disabled={!!errors.longitude || !!errors.latitude || !values.latitude || !values.longitude}
            />
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

export default DriverDetails;

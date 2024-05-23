import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FormikProps } from 'formik';
import { FormValues } from '../interfaces/ticket.interface'; // Importa tu tipo de formulario
import { DriverDetailsProps } from '../interfaces/ticket.interface';
import useTrafficTicketForm from '../hooks/useTrafficTiketForm';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import { useNavigation } from '@react-navigation/native';
import { useTrafficTicketStore } from '../../../store/useTicketStore';
import { adaptHandleChange, adaptHandleBlur } from '../../../utils/adapter.handler';

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
        handleChange('latitude')(latitude.toString());
        handleChange('longitude')(longitude.toString());
      }, [latitude, longitude]);
    

    const isNextButtonDisabled =
        !!errors.name ||
        !!errors.email ||
        !values.name ||
        !values.email;
        

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
                placeholder="Email del conductor"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
            />
            {errors.email && touched.email ? <Text style={styles.error}>{errors.email}</Text> : null}

            <TextInput
                style={{ display: 'none' }} 
                onChangeText={handleChange('latitude')}
                onBlur={handleBlur('latitude')}
                value={values.latitude}
            />
            <TextInput
                style={{ display: 'none' }} 
                onChangeText={handleChange('longitude')}
                onBlur={handleBlur('longitude')}
                value={values.longitude}
            />

            <Button
                title="Siguiente"
                onPress={() => navigation.navigate('CarDetails')}
                disabled={isNextButtonDisabled}
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

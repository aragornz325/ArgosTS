import React from 'react';
import { View, ScrollView, Button, TextInput, StyleSheet, Text, TouchableOpacity, Platform, } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import useTrafficTicketForm from './hooks/useTrafficTiketForm';
import { TrafficTicketSchema } from './validationSchema/ticket.validationSchema';


const TrafficTicketScreenOLD: React.FC = () => {
  const {
    datePickerVisible,
    setDatePickerVisible,
    handlePhotoCapture,
    handleSubmit,
  } = useTrafficTicketForm();

  return (
    <Formik
      initialValues={{
        name: '',
        licenseNumber: '',
        email: '',
        carColor: '',
        carMake: '',
        carModel: '',
        date: new Date(),
      }}
      validationSchema={TrafficTicketSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }) => (
        <View style={styles.container}>
                <TouchableOpacity 
                  style={styles.buttonCamera}              
                  onPress={handlePhotoCapture} >
                      <Text style={styles.buttonText}>Tomar foto</Text>
                </TouchableOpacity>
            <ScrollView>
            <View style={styles.sections}>
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
            </View>

            <View style={styles.sections}>
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
            </View>

            <View style={styles.sections}>
            <Text style={styles.sectionTitle}>Fecha de la Infraccion</Text>
            <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
            <View pointerEvents="none">
              <TextInput
                style={styles.input}
                placeholder="Fecha"
                value={values.date.toDateString()}
                editable={false}
              />
            </View>
          </TouchableOpacity>
          {datePickerVisible && (
            <DateTimePicker
              value={values.date}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setDatePickerVisible(Platform.OS === 'ios');
                const currentDate = selectedDate || values.date;
                setFieldValue('date', currentDate);
              }}
            />
          )}
            </View>

                <Button onPress={handleSubmit as any} title="enviar" />

            </ScrollView>

            </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  buttonCamera:{
    backgroundColor: '#6200EE', 
    padding: 15, 
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 30, 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5, 
},
buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16, // Tamaño de fuente más grande para el texto del botón
  },
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  error: {
    marginTop: -10,
    marginBottom: 10,
    fontSize: 10,
    color: 'red',
  },
  sections:{
    padding: 10,
    margin: 10,
    borderWidth: 0.2,
  },
  sectionTitle:{
    textAlign: 'center', 
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 10,},


});

export default TrafficTicketScreenOLD;
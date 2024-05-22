import React from 'react';
import { View, Button, TextInput, StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import useTrafficTicketForm from './hooks/useTrafficTiketForm';
import { TrafficTicketSchema } from './validationSchema/ticket.validationSchema';


const TrafficTicketScreen: React.FC = () => {
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
          <Button title="Take Photo" onPress={handlePhotoCapture} />
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
            placeholder="Número de patente"
            onChangeText={handleChange('licenseNumber')}
            onBlur={handleBlur('licenseNumber')}
            value={values.licenseNumber}
          />
          {errors.licenseNumber && touched.licenseNumber ? <Text style={styles.error}>{errors.licenseNumber}</Text> : null}
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email ? <Text style={styles.error}>{errors.email}</Text> : null}
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
          <Button onPress={handleSubmit as any} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 12,
    color: 'red',
  },
});

export default TrafficTicketScreen;
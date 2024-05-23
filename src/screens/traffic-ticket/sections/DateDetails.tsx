import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FormikProps } from 'formik';
import { FormValues } from '../interfaces/ticket.interface';

interface InfractionDateProps extends FormikProps<FormValues> {
  navigation: any;
}

const InfractionDate: React.FC<InfractionDateProps> = ({ values, setFieldValue, handleSubmit }) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [timePickerVisible, setTimePickerVisible] = useState(false);

  const isNextButtonDisabled = !values.date || !values.time;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Fecha de la Infracción</Text>
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
            if (Platform.OS !== 'ios') {
              setDatePickerVisible(false);
            }
          }}
        />
      )}

      <TouchableOpacity onPress={() => setTimePickerVisible(true)}>
        <View pointerEvents="none">
          <TextInput
            style={styles.input}
            placeholder="Hora"
            value={values.time.toTimeString().slice(0, 5)}
            editable={false}
          />
        </View>
      </TouchableOpacity>
      {timePickerVisible && (
        <DateTimePicker
          value={values.time}
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            setTimePickerVisible(Platform.OS === 'ios');
            const currentTime = selectedTime || values.time;
            setFieldValue('time', currentTime);
            if (Platform.OS !== 'ios') {
              setTimePickerVisible(false);
            }
          }}
        />
      )}

      <Button 
      title="Enviar" 
      onPress={() => handleSubmit()}
      disabled={isNextButtonDisabled} />
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

export default InfractionDate;

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { InfractionDateProps } from '../interfaces/ticket.interface';
import FormInputValue from '../../../components/formInputValue';
import NextButton from '../../../components/nextButton';
import BackButton from '../../../components/backButton';
import ButtonsContainer from '../../../components/buttonsContainer';
import FormContainer from '../../../components/FormContainer';

const InfractionDate: React.FC<InfractionDateProps> = ({ values, setFieldValue, handleBlur, handleChange, errors, navigation }) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [timePickerVisible, setTimePickerVisible] = useState(false);

  const isNextButtonDisabled = !values.date || !values.location || !!errors.location;

  return (
    <KeyboardAvoidingView 
      style={styles.keyboardAvoidingView} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <View style={styles.container}>

      <FormContainer>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Fecha</Text>
          <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
            <View pointerEvents="none">
              <FormInputValue
                name="date"
                placeholder="Fecha y hora de la infracción"
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
                console.log('currentDate', currentDate);
                setFieldValue('date', currentDate);
                if (Platform.OS !== 'ios') {
                  setDatePickerVisible(false);
                }
              }}
            />
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lugar</Text>
          <FormInputValue
            name="location"
            placeholder="Lugar de la infracción"
            onChangeText={handleChange('location')}
            onBlur={handleBlur('location')}
            value={values.location}
          />
        </View>
        </FormContainer>
        <ButtonsContainer>
          <BackButton navigation={navigation} />
          <NextButton 
            navigation={navigation} 
            pagaName="InfractionDetails"
            disabled={isNextButtonDisabled} />
        </ButtonsContainer>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 16,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
  }
});

export default InfractionDate;

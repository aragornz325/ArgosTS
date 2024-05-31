// PersonalDataSection.tsx
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FormikErrors, FormikTouched } from 'formik';
import { FontAwesome5 } from '@expo/vector-icons';
import theme from '../theme';

interface FieldProps {
  label: string;
  field: string;
  value: string;
  error?: string;
  touched?: boolean;
  handleEdit: (field: string, value: string) => void;
}

const Field: React.FC<FieldProps> = ({ label, field, value, error, touched, handleEdit }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          editable={false}
        />
        <TouchableOpacity style={{marginLeft:10}} onPress={() => handleEdit(field, value)}>
        <FontAwesome5  name="pencil-alt" size={24} color={theme.colors.iconsPicker}  />
        </TouchableOpacity>
      </View>
      {error && touched ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}
    </View>
  );
};

interface PersonalDataSectionProps {
  fields: Array<{ label: string; field: string }>;
  values: any;
  errors: FormikErrors<any>;
  touched: FormikTouched<any>;
  handleEdit: (field: string, value: string) => void;
}

const PersonalDataSection: React.FC<PersonalDataSectionProps> = ({ fields, values, errors, touched, handleEdit }) => {
  return (
    <View style={styles.section}>
      {fields.map(({ label, field }) => (
        <Field
          key={field}
          label={label}
          field={field}
          value={values[field]}
          error={errors[field] as string}
          touched={touched[field] as boolean}
          handleEdit={handleEdit}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fieldContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default PersonalDataSection;

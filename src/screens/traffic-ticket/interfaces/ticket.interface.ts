// types.ts
import { NavigationProp } from '@react-navigation/native';
import { FormikErrors, FormikTouched, FormikProps } from 'formik';

export interface FormValues {
  name: string;
  email: string;
  licenseNumber: string;
  carColor: string;
  carMake: string;
  carModel: string;
  date: Date;
  time: Date;
  latitude: string;
  longitude: string;
}

export interface DriverDetailsProps {
  navigation: NavigationProp<any>;
  values: FormValues;
  handleChange: any;
  handleBlur: any;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
}

export interface CarDetailsProps {
  navigation: NavigationProp<any>;
  values: FormValues;
  handleChange: any;
  handleBlur: any;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
}

export interface InfractionDateProps {
    values: FormValues;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
    handleSubmit: () => void;
  }
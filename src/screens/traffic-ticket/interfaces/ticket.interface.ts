// types.ts
import { NavigationProp } from '@react-navigation/native';
import { FormikErrors, FormikTouched, FormikProps } from 'formik';

export interface FormValues {
  time: Date;
  date: Date;
  location: string;
  latitude: string;
  longitude: string;
  plateNumber: string;
  vehicleBrand: string;
  vehicleModel: string;
  modelYear: number;
  color: string;
  typeOfService: string;
  infractionCode: string | null;
  lawArticleNumber: string | null;
  observations: string;
  driverName: string;
  driverLicenseNumber: string;
  driverAddress: string;
  driverPhone: string;
  driverEmail: string;
  photo: string;
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

export interface PhotoDetailsProps {
  navigation: NavigationProp<any>;
  values: FormValues;
}

export interface InfractionDateProps {
    values: FormValues;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
    handleSubmit: () => void;
  }
// types.ts
import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
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
  navigation: StackNavigationProp<ParamListBase>;
  values: FormValues;
  handleChange: any;
  handleBlur: any;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
}

export interface CarDetailsProps {
  navigation: StackNavigationProp<ParamListBase>;
  values: FormValues;
  handleChange: any;
  handleBlur: any;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
}

export interface PhotoDetailsProps {
  navigation: StackNavigationProp<ParamListBase>;
  values: FormValues;
  
}

export interface InfractionDateProps {
    values: FormValues;
    navigation: StackNavigationProp<ParamListBase>;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
    handleChange: any;
    handleBlur: any;
    errors: FormikErrors<FormValues>;
    touched: FormikTouched<FormValues>;
  }

export interface InfractionDetailsProps {
  navigation: StackNavigationProp<ParamListBase>;
  values: FormValues;
  handleChange: any;
  handleBlur: any;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleSubmit: FormikProps<FormValues>['handleSubmit'];
}
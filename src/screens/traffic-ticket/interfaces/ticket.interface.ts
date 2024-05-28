// types.ts
import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FormikErrors, FormikTouched, FormikProps } from 'formik';

export interface FormValues {
  date: Date;
  location: string;
  plateNumber: string;
  vehicleBrand: string;
  vehicleModel: string;
  modelYear: string;
  color: string;
  typeOfService: string; // Assuming this refers to 'Tipo de Servicio'
  infractionCode: string; // 'Codigo Infraccion' in Spanish
  lawArticleNumber: string; // 'Articulo Ley' in Spanish
  observations?: string; // Optional since there may not always be observations
  driverName: string; // Name of the driver
  driverLicenseNumber: string; // Driver's license number
  driverAddress: string; // Address of the driver
  driverPhone: string; // Phone number of the driver // Phone number of the driver // Optional since there may not always be observations
  driverEmail: string; // Email of the driver
  latitude: number;
  longitude: number;
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
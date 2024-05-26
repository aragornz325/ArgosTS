import React from 'react';
import { Formik, FormikProps } from 'formik';
import { createStackNavigator } from '@react-navigation/stack';
import { FormValues } from './interfaces/ticket.interface'; // Importa tu tipo de formulario
import { TrafficTicketSchema } from './validationSchema/ticket.validationSchema';
import useTrafficTicketForm from './hooks/useTrafficTiketForm';


import DriverDetails from './sections/DriverDetails';
import CarDetails from './sections/CarDetails';
import InfractionDate from './sections/DateDetails';
import PhotoDetails from './sections/PhotoDetails';
import CameraComponent from '../../components/camera';

const Stack = createStackNavigator();

const initialValues: FormValues = {
  date: new Date(),
  time: new Date(),
  location: '',
  longitude: '',
  latitude: '',
  plateNumber: '',
  vehicleBrand: '',
  vehicleModel: '',
  modelYear: 0,
  color: '',
  typeOfService: '',
  infractionCode: null,
  lawArticleNumber: null,
  observations: '',
  driverName: '',
  driverLicenseNumber: '',
  driverAddress: '',
  driverPhone: '',
  driverEmail: '',
  photo: '',

};


const TrafficTicketScreen: React.FC = (navigation:any) => {
  const { handleSubmit } = useTrafficTicketForm();


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TrafficTicketSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }: FormikProps<FormValues>) => (
        <Stack.Navigator initialRouteName="PhotoDetails">
        <Stack.Screen 
        name='PhotoDetails'
        options={{ headerShown: false }}>
          {(props) => (
            <PhotoDetails
            {...props}
            values={values}
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen 
        name='CameraComponent'
        options={{ headerShown: false }}>
          {(props) => (
            <CameraComponent
            />
          )}
        </Stack.Screen>


        <Stack.Screen 
        name="DriverDetails"
        options={{ headerShown: false }} >
          {(props) => (
            <DriverDetails
              {...props}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
        name="CarDetails"
        options={{ headerShown: false }}>
          {(props) => (
            <CarDetails
              {...props}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
        name="InfractionDate"
        options={{ headerShown: false }}>
          {(props) => (
            <InfractionDate
              {...props}
              values={values}
              setFieldValue={setFieldValue}
              handleSubmit={handleSubmit}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
      )}
    </Formik>
  );
};

export default TrafficTicketScreen;

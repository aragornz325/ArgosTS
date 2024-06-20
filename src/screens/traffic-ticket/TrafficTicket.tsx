import React from 'react';
import { Formik, FormikProps } from 'formik';
import { createStackNavigator } from '@react-navigation/stack';
import { FormValues } from './interfaces/ticket.interface'; // Importa tu tipo de formulario
import { TrafficTicketSchema } from './validationSchema/ticket.validationSchema';
import useTrafficTicketForm from './hooks/useTrafficTiketForm';
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';


import DriverDetails from './sections/DriverDetails';
import CarDetails from './sections/CarDetails';
import InfractionDate from './sections/DateDetails';
import PhotoDetails from './sections/PhotoDetails';
import CameraComponent from '../../components/camera';
import InfractionDetails from './sections/InfractionDetails';
import ProtectedRoutes from '../../routes/ProtectedRoutes';

const Stack = createStackNavigator();

const initialValues: FormValues = {
  date: new Date(),
  location: '',
  longitude: 0,
  latitude: 0,
  plateNumber: '',
  vehicleBrand: '',
  vehicleModel: '',
  modelYear: '',
  color: '',
  typeOfService: '',
  infractionCode: '',
  lawArticleNumber: '',
  observations: '',
  driverName: '',
  driverLicenseNumber: '',
  driverAddress: '',
  driverPhone: '',
  driverEmail: '',
  photo: '',

};



const TrafficTicketScreen: React.FC = (navigation) => {
  const { handleSubmit, isLoading } = useTrafficTicketForm();


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TrafficTicketSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }: FormikProps<FormValues>) => (
        <Stack.Navigator 
        initialRouteName="PhotoDetails"
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.FadeOutToBottomAndroidSpec,
          },
          headerStyleInterpolator: HeaderStyleInterpolators.forFade,
        }}
        >
        <Stack.Screen 
        name='PhotoDetails'
        options={{ headerShown: false }}>
          {(props) => (
            <ProtectedRoutes>
            <PhotoDetails
            {...props}
            values={values}
            />
            </ProtectedRoutes>
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
            <ProtectedRoutes>
            <DriverDetails
              {...props}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            </ProtectedRoutes>
          )}
        </Stack.Screen>
        <Stack.Screen 
        name="InfractionDetails"
        options={{ headerShown: false }} >
          {(props) => (
            <ProtectedRoutes>
            <InfractionDetails
              {...props}
              isLoading={isLoading}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
              handleSubmit={handleSubmit}
            />
            </ProtectedRoutes>
          )}
        </Stack.Screen>
        <Stack.Screen 
        name="CarDetails"
        options={{ headerShown: false }}>
          {(props) => (
            <ProtectedRoutes>
            <CarDetails
              {...props}
              values={values}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            </ProtectedRoutes>
          )}
        </Stack.Screen>
        <Stack.Screen 
        name="InfractionDate"
        options={{ headerShown: false }}>
          {(props) => (
            <ProtectedRoutes>
            <InfractionDate
              {...props}
              values={values}
              setFieldValue={setFieldValue}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            </ProtectedRoutes>
          )}
        </Stack.Screen>
      </Stack.Navigator>
      )}
    </Formik>
  );
};

export default TrafficTicketScreen;

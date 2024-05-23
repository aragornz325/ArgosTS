import React from 'react';
import { Formik, FormikProps } from 'formik';
import { createStackNavigator } from '@react-navigation/stack';
import * as Yup from 'yup';
import DriverDetails from './sections/DriverDetails';
import CarDetails from './sections/CarDetails';
import InfractionDate from './sections/DateDetails';
import { FormValues } from './interfaces/ticket.interface'; // Importa tu tipo de formulario
import { TrafficTicketSchema } from './validationSchema/ticket.validationSchema';
import useTrafficTicketForm from './hooks/useTrafficTiketForm';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/RoutesTypes';


const Stack = createStackNavigator();

const initialValues: FormValues = {
  name: '',
  licenseNumber: '',
  email: '',
  carColor: '',
  carMake: '',
  carModel: '',
  date: new Date(),
  time: new Date(),
  latitude:'',
  longitude:'',
};



const TrafficTicketScreen: React.FC = (navigation:any) => {
  const { handleSubmit } = useTrafficTicketForm();

  // const handleSubmit = (values: FormValues) => {
  //   console.log(values);
  //   // Aquí puedes manejar el envío de los datos
  // };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TrafficTicketSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values, setFieldValue, errors, touched }: FormikProps<FormValues>) => (
        <Stack.Navigator initialRouteName="DriverDetails">
        <Stack.Screen name="DriverDetails">
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
        <Stack.Screen name="CarDetails">
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
        <Stack.Screen name="InfractionDate">
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

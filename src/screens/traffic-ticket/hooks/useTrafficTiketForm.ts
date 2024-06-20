import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { FormikHelpers } from 'formik';
import { useTrafficTicketStore } from '../../../store/useTicketStore';
import { FormValues } from '../interfaces/ticket.interface';
import { createTicketQuery } from '../querys/trafficTicket.query';
import { useNavigation } from '../../../components/hooksComponents/useNavigation';
import { SQLite_TT_query } from '../querys/SQLite.TT.query';


const useTrafficTicketForm = () => {
  const navigation = useNavigation();
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga
  const setField = useTrafficTicketStore(state => state.setField);
  
  useEffect(() => {
    (async () => {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      const mediaLibraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      const locationStatus = await Location.requestForegroundPermissionsAsync();
      
      if (cameraStatus.status !== 'granted' || mediaLibraryStatus.status !== 'granted' || locationStatus.status !== 'granted') {
        Alert.alert('Permission required', 'We need camera, photo library and location permissions to make this work!');
      }
    })();
  }, []);
  
  const getPermissionAsync = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
  };
  
  const handleGetCurrentLocation = async () => {
    try {
      await getPermissionAsync();
      let location = await Location.getCurrentPositionAsync({});
      setField('latitude', location.coords.latitude.toString());
      setField('longitude', location.coords.longitude.toString());
      return location; 
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
      return null; 
    }
  };
  
  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    setIsLoading(true); // Inicia el estado de carga
    try {
      await handleGetCurrentLocation();

      
      await SQLite_TT_query.addTrafficTicket(values);
      //await createTicketQuery(values);
      actions.resetForm();
      actions.setSubmitting(false);
      navigation.navigate('Home')
    } catch (error) {
      console.error('Error al enviar el ticket:', error);
    } finally {
      setIsLoading(false); // Finaliza el estado de carga
    }
  };

  return {
    handleGetCurrentLocation,
    datePickerVisible,
    setDatePickerVisible,
    handleSubmit,
    isLoading, // Agrega el estado de carga
  };
};

export default useTrafficTicketForm;

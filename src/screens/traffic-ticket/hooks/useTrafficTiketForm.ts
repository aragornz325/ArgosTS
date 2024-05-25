import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { FormikHelpers } from 'formik';
import { useTrafficTicketStore } from '../../../store/useTicketStore';
import { FormValues } from '../interfaces/ticket.interface';
import { useFormikContext } from 'formik';


const useTrafficTicketForm = () => {

  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const  setField  = useTrafficTicketStore(state => state.setField);
 

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
      getPermissionAsync();
      let location = await Location.getCurrentPositionAsync({});
      setField('latitude', location.coords.latitude.toString());
      setField('longitude', location.coords.longitude.toString());
      return location; // Devuelve la ubicación actual
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
      return null; // En caso de error, devuelve null
    }
  };

  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
    await handleGetCurrentLocation();
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return {
    handleGetCurrentLocation,
    datePickerVisible,
    setDatePickerVisible,
    handleSubmit,
  };
};

export default useTrafficTicketForm;

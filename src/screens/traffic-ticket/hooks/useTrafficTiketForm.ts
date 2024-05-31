import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { FormikHelpers } from 'formik';
import { useTrafficTicketStore } from '../../../store/useTicketStore';
import { FormValues } from '../interfaces/ticket.interface';
import { createTicketQuery } from '../querys/trafficTicket.query';



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

  // const handlePhotoCapture = async () => {
  //   let result = await ImagePicker.launchCameraAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: false,
  //   });

  //   if (!result.canceled) {
  //     setFieldValue('photo', result.assets[0].uri);
  //   }else{
  //     setFieldValue('photo', '');
  //   }
  // };


  const handleGetCurrentLocation = async () => {
    try {
      getPermissionAsync();
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
    
    //await handleGetCurrentLocation();
    await createTicketQuery(values);
    actions.resetForm();
    actions.setSubmitting(false);
  
  };

  return {
    handleGetCurrentLocation,
    datePickerVisible,
    setDatePickerVisible,
    handleSubmit,
    //handlePhotoCapture
  };
};

export default useTrafficTicketForm;

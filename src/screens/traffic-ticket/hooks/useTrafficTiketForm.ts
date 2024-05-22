import { useState, useEffect } from 'react';
import { Alert, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { FormikHelpers } from 'formik';
import { useTrafficTicketStore } from '../../../store/useTicketStore';

interface FormValues {
  name: string;
  licenseNumber: string;
  email: string;
  carColor: string;
  carMake: string;
  carModel: string;
  date: Date;
}

const useTrafficTicketForm = () => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const { setField } = useTrafficTicketStore();

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

  const handlePhotoCapture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
    });

    if (!result.canceled) {
      console.log(result.assets[0].uri);
      // Aquí puedes manejar el resultado de la captura de la foto, por ejemplo, guardarla en el estado
    }
  };

  const handleGetCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    setField('gpsPosition', {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    console.log(values);
    handleGetCurrentLocation();
    actions.setSubmitting(false);
  };

  return {
    datePickerVisible,
    setDatePickerVisible,
    handlePhotoCapture,
    handleSubmit,
  };
};

export default useTrafficTicketForm;

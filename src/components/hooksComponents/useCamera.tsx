import { useState, useEffect, useRef } from 'react';
import { Camera, CameraType, CameraView, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Text } from 'react-native';
import ConstantArgos from '../../utils/constant';
import { useFormikContext } from 'formik';
import { useNavigation } from './useNavigation';

const useCamera = (initialType: CameraType, initialFlash: FlashMode) => {

    const navigation = useNavigation();
    const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
    const [type, setType] = useState(ConstantArgos.CAMERA_TYPE.BACK as CameraType);
    const [flash, setFlash] = useState<FlashMode>(ConstantArgos.FLASH_MODE.OFF as FlashMode);
    const [photo, setPhoto] = useState<string | null>(null);
    const cameraRef = useRef<CameraView | null>(null);
    const {setFieldValue} = useFormikContext();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(status === 'granted');
        })();
    }, []);

    if (hasCameraPermission === false) {
        return <Text>You do not have permissions to use the camera</Text>;
    }

const takePicture = async () => {
    if (cameraRef) {
       try {
        const photo = await cameraRef.current?.takePictureAsync();
        if (photo){
            setPhoto(photo.uri);
        }else{
            console.error('No se tomo la foto');
        }
       } catch(error) {
        console.error('Error al tomar la foto', error);
       }
    }
};

const saveImage = async () => {
if(photo){
    try {
        await MediaLibrary.saveToLibraryAsync(photo);
        setPhoto(null);
        setFieldValue('photo', photo);
        navigation.goBack();

    } catch(error) {
        console.error('Error saving photo', error);
    }
}

}
return {
    hasCameraPermission,
    type,
    setType,
    flash,
    setFlash,
    photo,
    setPhoto,
    cameraRef,
    takePicture,
    saveImage,
}; 
};

export default useCamera;
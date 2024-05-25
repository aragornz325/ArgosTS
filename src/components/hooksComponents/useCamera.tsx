import { useState, useEffect, useRef } from 'react';
import { Camera, CameraType, CameraView, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Alert, Text } from 'react-native';
import ConstantArgos from '../../utils/constant';

const useCamera = (initialType: CameraType, initialFlash: FlashMode) => {

    const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
    const [type, setType] = useState(ConstantArgos.CAMERA_TYPE.BACK as CameraType);
    const [flash, setFlash] = useState<FlashMode>(ConstantArgos.FLASH_MODE.OFF as FlashMode);
    const [photo, setPhoto] = useState<string | null>(null);
    const cameraRef = useRef<CameraView | null>(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(status === 'granted');
        })();
    }, []);

    if (hasCameraPermission === false) {
        return <Text>No Tienes permisos para usar la camara</Text>;
    }

const takePicture = async () => {
    if (cameraRef) {
       try {
        const photo = await cameraRef.current?.takePictureAsync();
        console.log('Foto tomada', photo);
        if (photo){
            setPhoto(photo.uri);
            return photo;
        }else{
            console.log('No se tomo la foto');
        }
       } catch(error) {
        console.log('Error al tomar la foto', error);
       }
    }
};

const saveImage = async () => {
if(photo){
    try {
        await MediaLibrary.saveToLibraryAsync(photo);
        Alert.alert('Foto guardada', 'La foto se guardo correctamente');
        setPhoto(null);

    } catch(error) {
        console.log('Error al guardar la foto', error);
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
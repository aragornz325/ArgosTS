import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CameraView, CameraType, FlashMode } from 'expo-camera';

import ConstantArgos from '../utils/constant';
import ButtonCamera from './button';
import useCamera from './hooksComponents/useCamera';
import {CameraProps} from '../interfaces/camera.interface';


const CameraComponent: React.FC = () => {
    const {
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
    } = useCamera(ConstantArgos.CAMERA_TYPE.BACK as CameraType, ConstantArgos.FLASH_MODE.OFF as FlashMode) as CameraProps; 

    if (hasCameraPermission === false) {
        return <Text>No tienes permisos para usar la cámara</Text>;
    }

    return (
        <View style={styles.container}>
            {!photo ?
            <CameraView
                ref={cameraRef}
                style={styles.camera}
                flash={flash}
                facing={type}
            > 
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 15,
                paddingBottom: 15}}> 
                <ButtonCamera
                    title=""
                    icon={'retweet'}
                    onPress={() => {
                        setType(
                            type === 'back'
                            ? 'front'
                            : 'back'
                        );
                    }}
                />
                <ButtonCamera
                    title=""
                    icon={'flash'}
                    color={flash === 'on' ? '#FFD700' : '#000000'}
                    onPress={() => {
                        setFlash(
                            flash === 'off'
                            ? 'on'
                            : 'off'
                        );
                    }}
                />
            </View>
            </CameraView>
            :
            <Image source={{uri: photo}} style={styles.camera} />
            }
            <View>
                {photo ? 
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                    }}> 
                        <ButtonCamera
                            title="Volver a tomar foto"
                            icon={'retweet'}
                            onPress={() => {setPhoto(null);}}
                        />
                        <ButtonCamera
                            title="Guardar foto"
                            icon={'check'}
                            onPress={async () => {saveImage()}}
                        />
                    </View>
                    :    
                <ButtonCamera
                    title="Tomar foto"
                    icon={'camera'}
                    onPress={() => {takePicture();}}
                />
                }
            </View>
        </View>
    );
};

export default CameraComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
});


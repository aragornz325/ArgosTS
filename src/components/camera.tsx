import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { CameraView, Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';


import ConstantArgos from '../utils/constant';
import ButtonCamera from './button';
import useCamera from './hooksComponents/useCamera';


const CameraComponent = () => {
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
    } = useCamera(ConstantArgos.CAMERA_TYPE.BACK as CameraType, ConstantArgos.FLASH_MODE.OFF as FlashMode) as {
        hasCameraPermission: boolean | null;
        type: "front" | "back";
        setType: React.Dispatch<React.SetStateAction<"front" | "back">>;
        flash: FlashMode;
        setFlash: React.Dispatch<React.SetStateAction<FlashMode>>;
        photo: string | null;
        setPhoto: React.Dispatch<React.SetStateAction<string | null>>;
        cameraRef: React.RefObject<CameraView> | null;
        takePicture: () => void;
        saveImage: () => Promise<void>;
    };

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


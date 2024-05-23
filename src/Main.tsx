import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';

import { NavigationContainer } from '@react-navigation/native';
import RoutesApps from './routes/RoutesApp';
import AppBar from './components/appBar'; 
import { useAuthStore } from './store/useAuthStore';

const Main = () => {

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


  const logged = useAuthStore(state => state.loggedIn);
  return (
    <View style={styles.container}>
      <NavigationContainer>
          <RoutesApps />
          <AppBar/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 5 , 
  },
})

export default Main;
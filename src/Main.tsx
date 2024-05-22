import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import RoutesApps from './routes/RoutesApp';
import AppBar from './components/appBar'; 

const Main = () => {
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
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from '../components/appBar';
import { RootStackParamList } from '../types/RoutesTypes';
import { StyleSheet } from 'react-native';

import HomeScreen from '../screens/home/Home';
import TrafficTicket from '../screens/traffic-ticket/TrafficTicket';
import Contact from '../screens/contact/Contact';
import About from '../screens/about/About';
import SignIn from '../screens/signin/SignIn';
import ProtectedRoutes from './ProtectedRoutes';
import ProfileForm from '../screens/profile/profileScreen';
import MainMenuScreen from '../screens/mainMenu/mainMenu';
import OtherModules from '../screens/modules/modules';
import MisMultas from '../screens/misMultas/misMultas';


const Stack = createNativeStackNavigator<RootStackParamList>();

function RoutesApps() {
  
  return (
    <Stack.Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      animation: 'ios',
    }}
    >
      
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />

      <Stack.Screen name="MisMultas" options={{ headerShown: false }}>
        {props => (
          <ProtectedRoutes>
            <MisMultas />
          </ProtectedRoutes>
        )}
      </Stack.Screen>

      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {props => (
          <ProtectedRoutes>
            <HomeScreen />
          </ProtectedRoutes>
        )}
      </Stack.Screen>

      <Stack.Screen name="TrafficTicket" options={{ headerShown: false }}>
        {props => (
          <ProtectedRoutes>
            <TrafficTicket />
          </ProtectedRoutes>
        )}
      </Stack.Screen>

      <Stack.Screen name="Contact" options={{ headerShown: false }}>
        {props => (
          <ProtectedRoutes>
            <Contact {...props} />
          </ProtectedRoutes>
        )}
      </Stack.Screen>

      <Stack.Screen name="About" options={{ 
        headerShown: true,
        headerTitle:'volver',
        headerStyle: style.header,
        }}>
        {props => (
          <ProtectedRoutes>
            <About {...props} />
          </ProtectedRoutes>
        )}
      </Stack.Screen>

      <Stack.Screen name="Profile" options={{ 
        headerShown: true,
        headerTitle:'volver',
        headerStyle: style.header,
        }}>
        {props => (
          <ProtectedRoutes>
            <ProfileForm />
          </ProtectedRoutes>
        )}
      </Stack.Screen>
      <Stack.Screen name="MainMenu" options={{ 
        headerShown: true,
        headerTitle:'Menu Principal',
        headerStyle: style.header,}}>
        {props => (
          <ProtectedRoutes>
            <MainMenuScreen />
          </ProtectedRoutes>
        )}
      </Stack.Screen>

      <Stack.Screen name="OtherModules" options={{ 
        headerShown: true,
        headerTitle:'Volver',
        headerStyle: style.header,}}>
        {props => (
          <ProtectedRoutes>
            <OtherModules />
          </ProtectedRoutes>
        )}
      </Stack.Screen>

    </Stack.Navigator>
  );
}


const style = StyleSheet.create({
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00aaff',
    marginBottom: 10,
  },
  });

export default RoutesApps;
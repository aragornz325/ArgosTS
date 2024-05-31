import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from '../components/appBar';
import HomeScreen from '../screens/home/Home';
import TrafficTicket from '../screens/traffic-ticket/TrafficTicket';
import Contact from '../screens/contact/Contact';
import About from '../screens/about/About';
import SignIn from '../screens/signin/SignIn';
import ProtectedRoutes from './ProtectedRoutes';
import ProfileForm from '../screens/profile/profileScreen';


const Stack = createNativeStackNavigator();

function RoutesApps() {
  
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
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
      <Stack.Screen name="About" options={{ headerShown: false }}>
        {props => (
          <ProtectedRoutes>
            <About {...props} />
          </ProtectedRoutes>
        )}
      </Stack.Screen>
      <Stack.Screen name="Profile" options={{ headerShown: false }}>
        {props => (
          <ProtectedRoutes>
            <ProfileForm />
          </ProtectedRoutes>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default RoutesApps;
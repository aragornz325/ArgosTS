import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBar from '../components/appBar';
import Home from '../screens/home/Home';
import TrafficTicket from '../screens/traffic-ticket/TrafficTicket';
import Contact from '../screens/contact/Contact';
import About from '../screens/about/About';
import SignIn from '../screens/signin/SignIn';
import ProtectedRoutes from './ProtectedRoutes';

const Stack = createNativeStackNavigator();

function RoutesApps() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="Home" options={{ headerShown: false }}>
        {props => (
          <ProtectedRoutes>
            <Home {...props} />
          </ProtectedRoutes>
        )}
      </Stack.Screen>
      <Stack.Screen name="TrafficTicket" options={{ headerShown: false }}>
        {props => (
          <ProtectedRoutes>
            <TrafficTicket {...props} />
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
    </Stack.Navigator>
  );
}

export default RoutesApps;
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {jwtDecode} from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RoutesTypes'; // Ajusta la ruta según corresponda
import { useAuthStore } from '../store/useAuthStore'; // Ajusta la ruta según corresponda

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const isLoggedIn = useAuthStore((state) => state.loggedIn);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [isCheckingToken, setIsCheckingToken] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        setIsTokenValid(false);
        setIsCheckingToken(false);
        return;
      }
      const verToken = verifyToken(token);
      setIsTokenValid(verToken);
      setIsCheckingToken(false);
    };

    checkToken();
  }, []);

  useEffect(() => {
    if (!isCheckingToken) {
      if (!isLoggedIn || !isTokenValid) {
        navigation.navigate('SignIn');
      }
    }
  }, [isLoggedIn, isTokenValid, isCheckingToken, navigation]);

  if (isCheckingToken) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!isLoggedIn || !isTokenValid) {
    return <View />; // O un mensaje de "no autorizado"
  }

  return <>{children}</>;
};

export default ProtectedRoutes;

// Función de verificación del token
const verifyToken = (token: string): boolean => {
  if (!token) {
    return false;
  }
  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return false;
    }
    return true;
  } catch (error) {
    console.error('Token verification failed', error);
    return false;
  }
};
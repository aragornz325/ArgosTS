import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList} from '../types/RoutesTypes';
import {useAuthStore} from '../store/useAuthStore';
import veryfyToken from '../utils/verifyToken';

type ProtectedRoutesProps = {
  children: React.ReactNode;
};

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const isLoggedIn = useAuthStore((state) => state.loggedIn);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  

  React.useEffect(() => {
    
    if (!isLoggedIn) {
      navigation.navigate('SignIn');
    }
  }, [isLoggedIn, navigation]);

  if (!isLoggedIn) {
    return <View />; // Or a loading spinner
  }

  return <>{children}</>;
};

export default ProtectedRoutes;
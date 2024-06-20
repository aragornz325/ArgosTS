
import { useAuthStore } from "../../../store/useAuthStore";
import { SignInValues } from "../interfaces/signIn.interface";
import { signInQuery } from "../querys/signIn.query";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackParamList} from "../../../types/RoutesTypes";
import type { StackNavigationProp } from '@react-navigation/stack';
import { FormikHelpers } from "formik";
import { useNavigation } from "../../../components/hooksComponents/useNavigation";

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

const useSignIn = () => {
    const navigator = useNavigation();
    const setToken = useAuthStore((state) => state.changeToken);
    const changeLogged = useAuthStore((state) => state.changeLogged);
    const setUser = useAuthStore((state) => state.setUser);
    const setProfile = useAuthStore((state) => state.setProfile);
  
    const handleSubmit = async (values: SignInValues, actions: FormikHelpers<SignInValues>) => {
      const response = await signInQuery(values);
  
      if (!response) {
        alert('Usuario o contraseña incorrectos');
        actions.resetForm();
        return;
      }
  
      if (response) {
        setToken(response.token);
        await AsyncStorage.setItem('token', response.token);
        setUser(response.user);
        setProfile(response.user.profile);
        changeLogged();
        navigator.push('Home');
      }
    };
  
    return {
      handleSubmit,
    };
  };
  
  export default useSignIn;
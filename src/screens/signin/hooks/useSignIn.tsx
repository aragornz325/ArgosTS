import { useNavigation } from "@react-navigation/native";
import { useAuthStore } from "../../../store/useAuthStore";
import { SignInValues } from "../interfaces/signIn.interface";
import { signInQuery } from "../querys/signIn.query";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useSignIn = () => {
    const navigator = useNavigation();
    const setToken = useAuthStore((state) => state.changeToken);
    const changeLogged = useAuthStore((state) => state.changeLogged);

    const handleSubmit = async (values: SignInValues) => {
        const response = await signInQuery(values);
        if (response) {
            setToken(response.token);
            await AsyncStorage.setItem('token', response.token);
            changeLogged();
            navigator.navigate('Home');
        }
    }

    return {
        handleSubmit
    };
};

export default useSignIn;
import axios, { AxiosError } from 'axios';
import config from '../../../config/config'; // Asegúrate de ajustar la ruta según sea necesario
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IProfile } from '../../../interfaces/user.interface';
import { useAuthStore } from '../../../store/useAuthStore';

export const updateProfileQuery = async (values: IProfile) => {
    const setProfile = useAuthStore((state) => state.setProfile);
    const token = await AsyncStorage.getItem('token');
    try {
        const response = await axios.patch(
            `${config.backend.baseURL}/user/profile`,
            values,
            {
                headers: {
                    'x-api-key': config.backend.apiKey,
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        setProfile(response.data);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error('Error response:', error.response.data);
        } else if (error.request) {
            console.error('Error request:', error.request);
        } else {
            console.error('Error message:', error.message);
        }
    }
};
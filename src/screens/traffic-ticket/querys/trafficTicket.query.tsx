import axios, { AxiosError } from 'axios';
import config from '../../../config/config'; // Asegúrate de ajustar la ruta según sea necesario
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FormValues {
    [key: string]: any;
    photo: string; // URI de la foto
}

export const createTicketQuery = async (values: FormValues) => {    
    const formData = new FormData();
    const token = await AsyncStorage.getItem('token');
    const photoUri = values.photo;
    const photoName = photoUri.split('/').pop();

    formData.append('photo', {
        uri: photoUri,
        name: photoName,
        type: 'image/jpeg',
    }, photoName as string | 'photo.jpg');
    for (const key in values) {
        if (key === 'date') {
            formData.append(key, values[key].toISOString()); 
        } else
        if (key !== 'photo') {
            formData.append(key, (values[key]));
        }
    }

    console.log('formData', formData);

    try {
        const response = await axios.post(
            `${config.backend.baseURL}/ticket`,
            formData,
            {
                headers: {
                    'x-api-key': config.backend.apiKey,
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data', 
                },
            }
        );

        console.debug('response', response.data);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            // The server responded with a status code outside the 2xx range
            console.error('Error response:', error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Error request:', error.request);
        } else {
            // Something happened in setting up the request that triggered an error
            console.error('Error message:', error.message);
        }
    }
};

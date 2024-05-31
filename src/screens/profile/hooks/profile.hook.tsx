import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useAuthStore } from '../../../store/useAuthStore';
import config from '../../../config/config';
import { IProfile } from '../../../interfaces/user.interface';

const useProfileForm = () => {
    const profile = useAuthStore((state) => state.profile);
    const setProfile = useAuthStore((state) => state.setProfile);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentField, setCurrentField] = useState<string>('');
    const [currentValue, setCurrentValue] = useState<string>('');

    const handleEdit = (field: string, value: string) => {
        setCurrentField(field);
        setCurrentValue(value);
        setModalVisible(true);
    };

    const handleModalSubmit = (setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) => {
        setFieldValue(currentField, currentValue);
        setModalVisible(false);
    };

    const updateProfileQuery = async (values: IProfile) => {
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
                alert('Error al actualizar el perfil');
                console.error('Error response:', error.response.data);
            } else if (error.request) {
                alert('Error al actualizar el perfil');
                console.error('Error request:', error.request);
            } else {
                alert('Error al actualizar el perfil');
                console.error('Error message:', error.message);
            }
        }
    };

    const handleOnSubmit = (values: IProfile) => {
        updateProfileQuery(values);
    };

    const personalFields = [
        { label: 'Nombre', field: 'firstName' },
        { label: 'Apellido', field: 'lastName' },
        { label: 'Edad', field: 'age' },
        { label: 'Teléfono', field: 'phone' },
        { label: 'Ciudad', field: 'city' },
        { label: 'País', field: 'country' },
        { label: 'Código Postal', field: 'postalCode' },
        { label: 'Dirección', field: 'address' },
        { label: 'Género', field: 'gender' },
        { label: 'Fecha de Nacimiento', field: 'dateOfBirth' },
        { label: 'Biografía', field: 'bio' },
        { label: 'Enlaces a Redes Sociales', field: 'socialMediaLinks' },
        { label: 'Intereses', field: 'interests' },
        { label: 'Educación', field: 'education' },
        { label: 'Empleo', field: 'employment' },
    ];

    return {
        profile,
        modalVisible,
        currentField,
        currentValue,
        personalFields,
        handleEdit,
        handleModalSubmit,
        handleOnSubmit,
        setModalVisible,
        setCurrentValue,
    };
};

export default useProfileForm;

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { ProfileSchema } from './schema/validationSchema';
import PersonalDataSection from '../../components/personalDataSelection';
import ModalInputChange from '../../components/modalInput';
import useProfileForm from './hooks/profile.hook'; 
import { Feather } from '@expo/vector-icons';
import theme from '../../theme';

const ProfileForm: React.FC = () => {
    const {
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
    } = useProfileForm();

    if (!profile) {
        return null;
    }

    return (
        <Formik
            initialValues={profile}
            validationSchema={ProfileSchema}
            onSubmit={handleOnSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                <ScrollView style={styles.container}>
                    <View style={styles.header}>
                        <Image source={{ uri: values.avatarUrl }} style={styles.avatar} />
                        <TouchableOpacity style={styles.cameraIcon}>
                            <Feather name="camera" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.name}>{values.firstName} {values.lastName}</Text>
                        <Text style={styles.cuil}>CUIL: {profile.postalCode}</Text>
                        <Text style={styles.status}>Identidad validada</Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Mis datos personales</Text>
                        <PersonalDataSection
                            fields={personalFields}
                            values={values}
                            errors={errors}
                            touched={touched}
                            handleEdit={handleEdit}
                        />
    
                        <Button onPress={handleSubmit as any} title="Actualizar" />
                    </View>
    
                    <ModalInputChange
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        handleModalSubmit={() => handleModalSubmit(setFieldValue)}
                        currentField={currentField}
                        currentValue={currentValue}
                        setCurrentValue={setCurrentValue}
                        setFieldValue={setFieldValue}
                    />
                </ScrollView>
            )}
        </Formik>
    );
};
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f5f5f5',
        },
        header: {
            backgroundColor: '#00aaff',
            padding: 20,
            alignItems: 'center',
        },
        avatar: {
            width: 150,
            height: 150,
            borderRadius: 100,
            marginBottom: 10,
        },
        cameraIcon: {
            position: 'absolute',
            right: 120,
            top: 125,
            backgroundColor: theme.colors.iconsPicker,
            borderRadius: 20,
            padding: 5,
        },
        name: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#fff',
        },
        cuil: {
            fontSize: 16,
            color: '#fff',
        },
        status: {
            fontSize: 14,
            color: '#fff',
        },
        section: {
            padding: 20,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 10,
        }
    });
    
    export default ProfileForm;
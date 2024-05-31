import React from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
 // Asegúrate de importar los estilos necesarios

const ModalInputChange: React.FC<ModalProps>  = ({ modalVisible, setModalVisible, handleModalSubmit, currentField, currentValue, setCurrentValue, setFieldValue }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                    <Text style={{ marginBottom: 5 }}>Actualizar {currentField}</Text>
                    <TextInput
                        style={styles.modalInput}
                        onChangeText={setCurrentValue}
                        value={currentValue}
                        placeholder={`Actualizar ${currentField}`}
                    />
                    <View style={styles.modalButtonContainer}>
                        <Button
                            title="Guardar"
                            onPress={() => handleModalSubmit(setFieldValue)}
                        />
                        <Button
                            title="Cancelar"
                            onPress={() => setModalVisible(false)}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalInputChange;


const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    modalButtonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});

interface ModalProps {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handleModalSubmit: (setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void) => void;
    currentField: string;
    currentValue: string;
    setCurrentValue: React.Dispatch<React.SetStateAction<string>>;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}
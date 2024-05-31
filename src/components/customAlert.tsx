import * as React from 'react';
import { Modal, Portal, Text, Button, Provider as PaperProvider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

interface CustomAlertProps {
  visible: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({ visible, title, message, onClose }) => {
  const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 10 };

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={onClose} contentContainerStyle={containerStyle}>
          <Text style={styles.alertTitle}>{title}</Text>
          <Text style={styles.alertMessage}>{message}</Text>
          <Button mode="contained" onPress={onClose} style={styles.closeButton}>
            Cerrar
          </Button>
        </Modal>
      </Portal>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  alertTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
  },
});

export default CustomAlert;

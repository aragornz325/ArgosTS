import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { PhotoDetailsProps } from '../interfaces/ticket.interface';
import theme from '../../../theme';
import NextButton from '../../../components/nextButton';
import ButtonsContainer from '../../../components/buttonsContainer';

const PhotoDetails: React.FC<PhotoDetailsProps> = ({ navigation, values  }) => {

  const isNextButtonDisabled = !values.photo;

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={()=> navigation.navigate('CameraComponent')}
          style={styles.photoButton}
        >
          <Text style={styles.photoButtonText}>Tomar foto</Text>
        </TouchableOpacity>
      </View>

      <ButtonsContainer>
        <NextButton
          navigation={navigation}
          pagaName="DriverDetails"
          disabled={isNextButtonDisabled}
        />
      </ButtonsContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Añade sombra en Android
  },
  photoButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default PhotoDetails;

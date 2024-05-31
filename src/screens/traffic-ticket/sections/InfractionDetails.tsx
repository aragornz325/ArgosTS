import { StyleSheet, Text, View , KeyboardAvoidingView, Platform, Button} from 'react-native'
import React from 'react'
import {FormValues, InfractionDetailsProps} from '../interfaces/ticket.interface'
import FormInputValues from '../../../components/formInputValue'
import ButtonsContainer from '../../../components/buttonsContainer'
import BackButton from '../../../components/backButton'
import SubmitButton from '../../../components/submitButton'
import FormContainer from '../../../components/FormContainer'



const InfractionDetails: React.FC<InfractionDetailsProps> = ({navigation, errors, handleBlur,handleChange, touched, values, handleSubmit}) => {
  
    const isNextButtonDisabled = !!errors.observations || !values.observations;
   

    return (
    <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
            <FormContainer>
            <Text style={styles.sectionTitle}>Detalle de la Infraccion</Text>
            <FormInputValues
                name="infractionCode"
                placeholder="Codigo de la infraccion"
                onChangeText={handleChange('infractionCode')}
                onBlur={handleBlur('infractionCode')}
                value={values.infractionCode}
            />
            <FormInputValues
                name="lawArticleNumber"
                placeholder="Numero de articulo de la ley"
                onChangeText={handleChange('lawArticleNumber')}
                onBlur={handleBlur('lawArticleNumber')}
                value={values.lawArticleNumber}
            />
            <FormInputValues
                style={styles.textArea}
                name="observations"
                placeholder="Observaciones"
                onChangeText={handleChange('observations')}
                onBlur={handleBlur('observations')}
                value={values.observations}
                multiline={true}
                numberOfLines={4}
            />
            </FormContainer>
            <ButtonsContainer>
                <BackButton 
                    navigation={navigation} />
                <SubmitButton
                    disabled={isNextButtonDisabled}
                    onPress={()=>handleSubmit()} />
            </ButtonsContainer> 
    </KeyboardAvoidingView>
  )
}

export default InfractionDetails

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        alignItems: 'center',
    },
    sectionTitle: {
        fontSize: 24,
        marginBottom: 16,
      },
      textArea: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top', // Keeps the text at the top of the input
      },
})
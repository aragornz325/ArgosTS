import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const About = ({ navigation }: { navigation: any }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/OIG3.jpeg')}
                style={styles.image}
            />
            <Text style={styles.title}>Argos - Sistema de Multas Digitales</Text>
            <Text style={styles.subtitle}>Diseñado por Mythological Software</Text>
            <Text style={styles.description}>Argos es una aplicación diseñada para facilitar el proceso de emisión de multas de tránsito de forma digital. Con Argos, los agentes de tránsito pueden registrar infracciones de manera rápida y eficiente, mejorando la gestión y el control del tránsito en la ciudad.</Text>
            <Text style={styles.contact}>Contacto: info@mythologicalsoftware.com | Teléfono: (343) 456-7890</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 335,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
    },
    contact: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
    }
});

export default About;

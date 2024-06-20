import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const OtherModules = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Sistema Argos</Text>
            <Text style={styles.message}>Usted no tiene permiso para solicitar acceso a otros módulos.</Text>
            <Text style={styles.message}>Comuníquese con su departamento de IT.</Text>
            <Text style={styles.title}>Módulos Disponibles:</Text>
            <View style={styles.module}>
                <Text style={styles.moduleText}>Control de medidores de consumo de Agua</Text>
                <Switch
                    value={false}
                    disabled={true}
                />
            </View>
            <View style={styles.module}>
                <Text style={styles.moduleText}>Control de pago tasa municipal</Text>
                <Switch
                    value={false}
                    disabled={true}
                />
            </View>
            <View style={styles.module}>
                <Text style={styles.moduleText}>Sistema de alerta temprana de emergencias</Text>
                <Switch
                    value={false}
                    disabled={true}
                />
            </View>
            <View style={styles.module}>
                <Text style={styles.moduleText}>Sistema de control de higiene y profilaxis</Text>
                <Switch
                    value={false}
                    disabled={true}
                />
            </View>
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
    message: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    module: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginVertical: 5,
        width: '100%',
    },
    moduleText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    }
});

export default OtherModules;

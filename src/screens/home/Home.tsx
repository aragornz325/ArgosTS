import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Dimensions } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types/RoutesTypes';
import { useNavigation } from '../../components/hooksComponents/useNavigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
const { width, height } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [isConnected, setIsConnected] = useState<boolean | null>(false);
  const [connectionType, setConnectionType] = useState<string | null>('sin info');
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
      setConnectionType(state.type);
    });

    return () => {
      clearInterval(interval);
      unsubscribe();
    };
  }, []);

  

  return (
    <View style={styles.container}>
      <View>
      <Image
          source={require('../../../assets/images.png')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.dateTime}>
          <Text style={styles.time}>{date.toLocaleTimeString()}</Text>
          <Text style={styles.date}>{date.toLocaleDateString()}</Text>
        </View>
        <View style={[styles.connectivityIndicator, { backgroundColor: isConnected ? '#00c853' : '#d50000' }]}>
          <Text style={styles.connectivityText}>
            {isConnected ? 'Conectado' : 'Desconectado'}
          </Text>
          <Text style={styles.connectionType}>
            {isConnected ? `: ${connectionType}` : ''}
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenido a Argos</Text>
        <Text style={styles.subtitle}>Registro de Infracciones de Tránsito</Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>navigation.navigate('TrafficTicket')}>
          <Text style={styles.buttonText}>Registrar Infracción</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dateTime: {
    alignItems: 'center',
  },
  time: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 18,
    color: '#666',
  },
  location: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
  },
  connectivityIndicator: {
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  connectivityText: {
    color: '#fff',
    fontSize: 12,
  },
  connectionType: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 8,
    width: width * 0.95,    
    
  },
});

export default HomeScreen;

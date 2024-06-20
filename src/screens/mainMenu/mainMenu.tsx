import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '../../components/hooksComponents/useNavigation';
import { useAuthStore } from '../../store/useAuthStore';


const MainMenuScreen = () => {
  const profile = useAuthStore((state) => state.profile);
  const setToken = useAuthStore((state) => state.changeToken);
  const changeLogged = useAuthStore((state) => state.changeLogged);
  const navigation = useNavigation();

  const handleLogout = () => {
    setToken('');
    changeLogged();
    navigation.push('SignIn');
  };


  return (
    <ScrollView>
    <View style={styles.container}>
  
      <View style={styles.profileSection}>
        <Image
          source={{ uri: profile?.avatarUrl }} // Reemplaza con la URL de la imagen de perfil
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>{profile?.firstName} {profile?.lastName}</Text>
        <Text style={styles.profileInfo}>CUIL: 20273964984</Text>
        <Text style={styles.profileStatus}>Identidad validada</Text>
      </View>
      <View style={styles.menuSection}>
        <MenuItem icon="person-outline" text="Mi perfil" onPress={() => navigation.navigate('Profile')} />
        <MenuItem icon="group" text="Usuarios" onPress={() => navigation.navigate('Children')} />
        <MenuItem icon="subscriptions" text="Otros modulos" onPress={() => navigation.navigate('OtherModules')} />
        <MenuItem icon="lock-outline" text="Seguridad y privacidad" onPress={() => navigation.navigate('Privacy')} />
        <MenuItem icon="info-outline" text="Mis Multas" onPress={() => navigation.navigate('MisMultas')} />
        <MenuItem icon="gavel" text="Términos y condiciones" onPress={() => navigation.navigate('Terms')} />
        <MenuItem icon="logout" text="Cerrar sesión" onPress={() => handleLogout()} />
        <MenuItem icon="home" text="Volver al inicio" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
    </ScrollView>
  );
};

const MenuItem = ({ icon, text, onPress }:
  { icon:string, text:string, onPress:()=> void }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Icon name={icon} type="material" color="#000" />
    <Text style={styles.menuText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#00aaff',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileInfo: {
    color: '#fff',
    fontSize: 14,
  },
  profileStatus: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  menuSection: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuText: {
    marginLeft: 20,
    fontSize: 16,
  },
});

export default MainMenuScreen;

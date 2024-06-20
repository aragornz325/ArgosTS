import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ajusta la importación según tus necesidades
import { useNavigation } from './hooksComponents/useNavigation';
import { useAuthStore } from '../store/useAuthStore';


const AppBar2: React.FC = () => {
  const navigation = useNavigation();
  
  const isLoggedIn = useAuthStore((state) => state.loggedIn);
  if (!isLoggedIn) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={()=>navigation.navigate('MainMenu')} style={styles.iconButton}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.iconButton}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  center: {
    flex: 2,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  iconButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AppBar2;
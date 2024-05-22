import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Constants from 'expo-constants';
import AppBarTap from './appBarTap';
import { RootStackParamList} from '../types/RoutesTypes';


const AppBar = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scroll}>
        <AppBarTap title="Home" onPress={() => navigation.navigate('Home')} style={styles.tab} />
        <AppBarTap title="Multa" onPress={() => navigation.navigate('TrafficTicket')} style={styles.tab} />
        <AppBarTap title="Contacto" onPress={() => navigation.navigate('Contact')} style={styles.tab} />
        <AppBarTap title="About" onPress={() => navigation.navigate('About')} style={styles.tab} />
        <AppBarTap title="Sign in" onPress={() => navigation.navigate('SignIn')} style={styles.tab} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight - 20,
    backgroundColor: '#999999',
  },
  scroll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignContent: 'space-between',
  },
  text: {
    color: '#fff',
  },
});

export default AppBar;


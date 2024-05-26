import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function ButtonCamera( {title, icon, color, onPress} :
  {title: string, icon: any, color?: string, onPress: () => void}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Entypo name={icon} size={28} color={color ? color : '#000000'} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#000000',
    marginLeft: 5,
  },
});
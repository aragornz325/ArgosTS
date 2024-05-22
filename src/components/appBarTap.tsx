import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AppBarTapProps {
  title: string;
  onPress: () => void;
  style?: any; 
}

const AppBarTap: React.FC<AppBarTapProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 18,
  },
  text: {
    color: '#fff',
  },
});

export default AppBarTap;

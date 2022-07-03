import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../styles/Colors';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export function PrimaryButton({ label, onPress }: ButtonProps) {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryPurple,
    height: RFValue(45),
    borderRadius: RFValue(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: Colors.primaryWhite,
    fontWeight: '600',
  },
});

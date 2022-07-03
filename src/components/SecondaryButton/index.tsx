import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../styles/Colors';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export function SecondaryButton({ label, onPress }: ButtonProps) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Colors.primaryPink,
    fontWeight: '500',
    fontSize: RFValue(13),
  },
});

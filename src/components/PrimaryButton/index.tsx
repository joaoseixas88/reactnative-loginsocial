import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export function PrimaryButton({label, onPress}: ButtonProps) {
  return (
    <TouchableHighlight onPress={onPress}>
      <Text>{label}</Text>
    </TouchableHighlight>
  );
}

import React from 'react';
import {TextInput, View, Text} from 'react-native';

interface InputProps {
  label: string;
}

export function Input({label}: InputProps) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput />
    </View>
  );
}

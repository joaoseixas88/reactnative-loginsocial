import { StyledProps } from 'native-base';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../styles/Colors';
import EyeOpen from '../../Assets/Svg/eye.svg';
import EyeClosed from '../../Assets/Svg/eye-closed.svg';

import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
  placeholder?: string;
  styles?: StyledProps;
  passwordType?: boolean;
}

export function Input({
  label,
  placeholder,
  styles,
  passwordType,
  ...rest
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={[componentStyles.container, styles]}>
      <Text style={componentStyles.label}>{label}</Text>
      <View style={componentStyles.input}>
        <TextInput
          placeholder={placeholder}
          {...rest}
          secureTextEntry={!showPassword}
        />
        {passwordType && (
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOpen width={15} height={15} />
            ) : (
              <EyeClosed width={16} height={16} />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
}

const componentStyles = StyleSheet.create({
  container: {},
  label: {
    fontSize: RFValue(14),
    color: Colors.secondaryPurple,
    fontWeight: '500',
  },
  input: {
    borderColor: '#B9B9B9',
    borderWidth: 1,
    borderRadius: RFValue(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(5),
  },
});

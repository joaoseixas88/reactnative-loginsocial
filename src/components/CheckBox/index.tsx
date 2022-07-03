import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Check from '../../Assets/Svg/Check.svg';
import { Colors } from '../../styles/Colors';

interface CheckBoxProps {
  text?: string;
  borderColor?: string;
  isChecked?: boolean;
  backgroundColor?: string;
  onPress?: () => void;
}

export function CheckBox({
  text,
  onPress,
  backgroundColor,
  isChecked = false,
  borderColor,
}: CheckBoxProps) {
  const newStyles = {
    backgroundColor: backgroundColor && backgroundColor,
    borderColor: borderColor && borderColor,
  };
  return (
    <Pressable
      style={{ alignItems: 'center', flexDirection: 'row' }}
      onPress={onPress}
    >
      <View style={[styles.container, { ...newStyles }]}>
        {isChecked && <Check width={RFValue(12)} height={RFValue(9)} />}
      </View>
      <Text style={[styles.text]}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: RFValue(18),
    width: RFValue(18),
    borderWidth: RFValue(1),
    paddingHorizontal: RFValue(2),
    paddingVertical: RFValue(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(5),
    marginRight: RFValue(5),
    borderColor: Colors.primaryGray,
  },
  text: {
    color: Colors.primaryBlack,
    fontSize: RFValue(14),
  },
});

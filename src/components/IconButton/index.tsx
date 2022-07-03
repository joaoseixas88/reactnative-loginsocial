import React, { ReactNode } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import GitHub from '../../Assets/Svg/Github.svg';
import { Colors } from '../../styles/Colors';

interface ButtonProps {
  label: string;
  onPress: () => void;
  icon: ReactNode;
}

export function IconButton({ label, onPress, icon }: ButtonProps) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={{ borderRadius: RFValue(10) }}
      underlayColor={Colors.primaryGray}
    >
      <View style={styles.container}>
        {icon}
        <Text>{label}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: RFValue(11),
    paddingHorizontal: RFValue(37),
    borderRadius: RFValue(10),
    borderColor: Colors.primaryGray,
  },
});

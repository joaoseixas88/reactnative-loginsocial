import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import GitHub from '../../Assets/Svg/Github.svg';

import Google from '../../Assets/Svg/Google.svg';
import {
  IconButton,
  Input,
  PrimaryButton,
  SecondaryButton,
} from '../../components';
import { CheckBox } from '../../components/CheckBox';
import { Colors } from '../../styles/Colors';

export function SignUp() {
  const [rememberChecked, setRememberChecked] = useState(false);
  const [securePassword, setSecurePassword] = useState(true);
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create an account</Text>
          <Text style={styles.subtitle}>Connect with your friends today!</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input label="Email Address" placeholder="Enter your email" />
          <Input
            label="Phone number"
            placeholder="Enter your password"
            styles={{ marginTop: RFValue(12) }}
            autoComplete={'tel'}
            keyboardType={'number-pad'}
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            styles={{ marginTop: RFValue(12) }}
            passwordType
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: RFValue(27),
            alignItems: 'center',
          }}
        >
          <CheckBox
            isChecked={rememberChecked}
            text="Remember me"
            onPress={() => setRememberChecked(!rememberChecked)}
          />

          <SecondaryButton
            label="Forgot Password"
            onPress={() => console.log('pressed')}
          />
        </View>
        <PrimaryButton label="Login" onPress={() => console.log('pressed')} />
        <View
          style={{
            marginVertical: RFValue(22),
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View style={styles.line} />
          <Text style={{ marginHorizontal: 5 }}>Or With</Text>
          <View style={styles.line} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <IconButton
            label="GitHub"
            onPress={() => console.log('pressed')}
            icon={<GitHub width={'20'} height={'20'} />}
          />
          <IconButton
            label="Google"
            onPress={() => console.log('pressed')}
            icon={<Google width={'20'} height={'20'} />}
          />
        </View>
      </View>
      <Pressable
        style={{ alignItems: 'center' }}
        onPress={() => console.log('pressable pressed')}
      >
        <Text>
          Don`t have an account?{' '}
          <Text style={{ color: Colors.secondaryPurple }}> Sign Up</Text>
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RFValue(27),
    justifyContent: 'space-between',
  },
  titleContainer: {
    marginTop: RFValue(41),
    marginBottom: RFValue(52),
  },
  title: {
    fontFamily: 'Manrope-Bold',
    fontSize: RFValue(25),
    color: Colors.primaryBlack,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: RFValue(14),
    color: Colors.primaryGray,
    fontWeight: '500',
  },
  inputContainer: {
    marginBottom: RFValue(18),
  },
  line: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
    flexDirection: 'column',
  },
});

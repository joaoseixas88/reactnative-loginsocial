import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconButton} from '../../components/IconButton';
import {Input} from '../../components/Input';
import {PrimaryButton} from '../../components/PrimaryButton';
import {SecondaryButton} from '../../components/SecondaryButton';

export function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Hi, Wellcome Back! 👋</Text>
        <Text>Hello again, you’ve been missed!</Text>
      </View>
      <Input label="Email" />
      <Input label="Password" />
      <PrimaryButton label="Login" onPress={() => console.log('pressed')} />
      <SecondaryButton
        label="Forgot Password"
        onPress={() => console.log('pressed')}
      />
      <View>
        <View />
        <Text>Or With</Text>
        <View />
      </View>
      <View>
        <IconButton label="GitHub" onPress={() => console.log('pressed')} />
        <IconButton label="Google" onPress={() => console.log('pressed')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    marginLeft: 29,
    marginTop: 92,
  },
});

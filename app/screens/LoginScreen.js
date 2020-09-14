import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Screen from '../components/Screen';

import * as Yup from 'yup';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
        />

        <AppFormField
          name="password"
          autoCapitalize="none"
          icon="lock"
          placeholder="Password"
          secureTextEntry={true}
        />
        <SubmitButton title="login"></SubmitButton>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;

import React from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './styles';
import LoginForm from './components/LoginForm';

export default function Login() {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>🔐 Login</Text>
      <Text style={styles.subtitle}>Acesse sua conta</Text>
      <LoginForm />
    </KeyboardAvoidingView>
  );
}
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";

import { router } from "expo-router";
import CustomTextInput from "@/components/CustomTextInput";
import { theme } from "@/constants/theme";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    setLoading(true);
    setError("");
  };

  return (
    <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Recover Password</Text>
        <Text style={styles.subtitle}>
          Write your email to recover yout password
        </Text>

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <CustomTextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="user@example.com"
        />

        <TouchableOpacity
          style={[styles.button, loading ? styles.buttonDisabled : null]}
          onPress={handleResetPassword}
          disabled={loading}
        >
          {loading ? (
            <Text style={styles.buttonText}>Sending...</Text>
          ) : (
            <Text style={styles.buttonText}>Send Link</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: theme.spacing.xl,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontSize: theme.text.xxlarge,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    textAlign: "center",
  },
  subtitle: {
    fontSize: theme.text.medium,
    color: theme.colors.textSecondary,
    textAlign: "center",
    marginBottom: theme.spacing.xl,
    paddingHorizontal: theme.spacing.md,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fdecea",
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.md,
  },
  errorText: {
    fontSize: theme.text.medium,
    color: theme.colors.error,
    marginLeft: theme.spacing.sm,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: theme.spacing.md,
    borderRadius: theme.radius.lg,
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.sm,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    fontSize: theme.text.large,
    color: "#ffffff",
    fontWeight: "600",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.xl,
  },
  backButtonText: {
    fontSize: theme.text.medium,
    color: theme.colors.primary,
    fontWeight: "500",
    marginLeft: theme.spacing.sm,
  },
});

export default ForgotPasswordScreen;

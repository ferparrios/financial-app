import CustomTextInput from "@/components/CustomTextInput";
import { theme } from "@/constants/theme";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    router.push("/tabs/(stack)/dashboard");
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        {error ? (
          <View style={styles.errorContainer}>
            <MaterialIcons name="error" size={24} color={theme.colors.error} />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <CustomTextInput
          label="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="user@example.com"
        />

        <CustomTextInput
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="********"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => router.push("/tabs/(stack)/forgot-passwrord")}
        >
          <Text style={styles.linkButtonText}>Forgot your password?</Text>
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
  title: {
    fontSize: theme.text.xxlarge,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
    textAlign: "center",
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
  linkButton: {
    marginTop: theme.spacing.lg,
    alignItems: "center",
  },
  linkButtonText: {
    fontSize: theme.text.medium,
    color: theme.colors.primary,
    fontWeight: "500",
  },
});

export default LoginScreen;

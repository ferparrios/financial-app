import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "@/constants/theme";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.userName}>User</Text>
        <Text style={styles.userEmail}>user@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoItem}>
          <MaterialIcons
            name="person"
            size={24}
            color={theme.colors.textSecondary}
          />
          <Text style={styles.infoText}>Name: No Name</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialIcons
            name="email"
            size={24}
            color={theme.colors.textSecondary}
          />

          <Text style={styles.infoText}>Email: No Email</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialIcons
            name="phone"
            size={24}
            color={theme.colors.textSecondary}
          />

          <Text style={styles.infoText}>Phone: +1 234 567 890</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Security</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Change password</Text>
          <MaterialIcons
            name="chevron-left"
            size={24}
            color={theme.colors.textSecondary}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Two factor authentication</Text>
          <MaterialIcons
            name="chevron-right"
            size={24}
            color={theme.colors.textSecondary}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Close sesion</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  profileHeader: {
    alignItems: "center",
    padding: theme.spacing.xl,
    backgroundColor: theme.colors.surface,
    marginBottom: theme.spacing.md,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: theme.spacing.md,
  },
  userName: {
    fontSize: theme.text.xxlarge,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  userEmail: {
    fontSize: theme.text.medium,
    color: theme.colors.textSecondary,
  },
  section: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    marginHorizontal: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.text.large,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  infoText: {
    fontSize: theme.text.medium,
    color: theme.colors.text,
    marginLeft: theme.spacing.md,
    flex: 1,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  actionText: {
    fontSize: theme.text.medium,
    color: theme.colors.text,
  },
  logoutButton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    alignItems: "center",
    margin: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  logoutText: {
    fontSize: theme.text.medium,
    color: theme.colors.error,
    fontWeight: "500",
  },
});

export default ProfileScreen;

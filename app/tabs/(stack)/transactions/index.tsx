import { mockTransactions } from "@/constants/mockData";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { theme } from "@/constants/theme";
import TransactionItem from "@/components/TransactionItem";

const TransactionsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search Transaction</Text>
        <TouchableOpacity>
          <MaterialIcons name="search" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={mockTransactions}
        keyExtractor={(item) => item.transaction_id}
        renderItem={({ item }) => <TransactionItem transaction={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    elevation: 2,
  },
  title: {
    fontSize: theme.text.xlarge,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  filterContainer: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  filterButton: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radius.xl,
    marginRight: theme.spacing.sm,
  },
  filterButtonActive: {
    backgroundColor: theme.colors.primary,
  },
  filterText: {
    fontSize: theme.text.medium,
    color: theme.colors.textSecondary,
  },
  filterTextActive: {
    color: "#fff",
    fontWeight: "700",
  },
  transactionList: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
  },
  listContent: {
    paddingBottom: theme.spacing.xl,
    paddingHorizontal: theme.spacing.md,
  },
  sectionHeader: {
    fontSize: theme.text.medium,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.sm,
  },
});

export default TransactionsScreen;

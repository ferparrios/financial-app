import AccountCard from "@/components/AccountCard";
import TransactionItem from "@/components/TransactionItem";
import { mockAccounts, mockTransactions } from "@/constants/mockData";
import { theme } from "@/constants/theme";
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const DashboardScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Financial Summary</Text>
        <View style={styles.cardRow}>
          <TouchableOpacity
            style={[styles.summaryCard, { backgroundColor: "#e3f2fd" }]}
            onPress={() => router.push("/tabs/(stack)/accounts")}
          >
            <View style={styles.cardIcon}>
              <MaterialIcons name="account-balance" size={24} color="black" />
            </View>
            <Text style={styles.cardTitle}>Accounts</Text>
            <Text style={styles.cardAmount}>$12,450.00</Text>
            <Text style={styles.cardSubtitle}>3 accounts</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.summaryCard, { backgroundColor: "#e8f5e9" }]}
            onPress={() => router.push("/tabs/(stack)/credit-cards")}
          >
            <View style={styles.cardIcon}>
              <AntDesign name="creditcard" size={24} color="black" />
            </View>
            <Text style={styles.cardTitle}>Cards</Text>
            <Text style={styles.cardAmount}>$2,300.00</Text>
            <Text style={styles.cardSubtitle}>2 cards</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Principal Accounts</Text>
            <TouchableOpacity>
              <Text style={styles.sectionLink}>See More</Text>
            </TouchableOpacity>
          </View>
          {mockAccounts.slice(0, 2).map((account) => (
            <AccountCard key={account.account_id} account={account} />
          ))}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Transactions</Text>
            <TouchableOpacity
              onPress={() => router.push("/tabs/(stack)/transactions")}
            >
              <Text style={styles.sectionLink}>See More</Text>
            </TouchableOpacity>
          </View>
          {mockTransactions.slice(0, 3).map((transaction) => (
            <TransactionItem
              key={transaction.transaction_id}
              transaction={transaction}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  title: {
    fontSize: theme.text.xxlarge,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: theme.spacing.lg,
  },
  summaryCard: {
    width: "48%",
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.sm,
  },
  cardTitle: {
    fontSize: theme.text.medium,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  cardAmount: {
    fontSize: theme.text.xlarge,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  cardSubtitle: {
    fontSize: theme.text.small,
    color: theme.colors.textSecondary,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.text.xlarge,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  sectionLink: {
    fontSize: theme.text.medium,
    color: theme.colors.primary,
    fontWeight: "500",
  },
});

export default DashboardScreen;

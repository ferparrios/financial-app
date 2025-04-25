import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { theme } from "@/constants/theme";
import { mockCreditCards } from "@/constants/mockData";
import CreditCardItem from "@/components/CreditCardItem";

const CreditCardsScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Add new credit card</Text>
          <TouchableOpacity style={styles.addButton}>
            <FontAwesome6 name="add" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>Your cards</Text>

        {mockCreditCards.map((card, index) => (
          <CreditCardItem
            key={index}
            card={card}
            cardType={index % 2 === 0 ? "visa" : "mastercard"}
          />
        ))}

        <View style={styles.summaryContainer}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Total Spend</Text>
            <Text style={styles.summaryValue}>$1,245.00</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Available</Text>
            <Text style={styles.summaryValue}>$8,755.00</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Pay</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: "100%",
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing.lg,
  },
  title: {
    fontSize: theme.text.xxlarge,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  addButton: {
    padding: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.text.large,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.md,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    padding: theme.spacing.lg,
    marginVertical: theme.spacing.lg,
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: theme.text.medium,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  summaryValue: {
    fontSize: theme.text.xlarge,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  paymentButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    alignItems: "center",
    marginTop: theme.spacing.sm,
  },
  paymentButtonText: {
    color: "#fff",
    fontSize: theme.text.large,
    fontWeight: "600",
  },
});

export default CreditCardsScreen;

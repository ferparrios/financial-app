import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { theme } from "../constants/theme";
import { CreditCard } from "@/types/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface CreditCardItemProps {
  card: CreditCard;
  cardType?: "visa" | "mastercard" | "amex" | "default";
  onPress?: () => void;
}

const CreditCardItem: React.FC<CreditCardItemProps> = ({
  card,
  cardType = "default",
  onPress,
}) => {
  const creditLimit = card.last_statement_balance * 3;
  const usagePercentage = Math.min(
    100,
    (card.last_statement_balance / creditLimit) * 100
  );

  const cardStyles: any = {
    visa: {
      background: "#1a1f71",
      accent: "#f7b600",
      logo: require("../assets/images/visa.png"),
    },
    mastercard: {
      background: "#eb001b",
      accent: "#f79e1b",
      logo: require("../assets/images/mastercard.png"),
    },
    amex: {
      background: "#002663",
      accent: "#ffffff",
      logo: require("../assets/images/amex.png"),
    },
    default: {
      background: "#3a0ca3",
      accent: "#4cc9f0",
      logo: require("../assets/images/credit-card.png"),
    },
  };

  const currentStyle = cardStyles[cardType] || cardStyles.default;

  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        { backgroundColor: currentStyle.background },
      ]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardTypeText}>CREDIT CARD</Text>
        <Image
          source={currentStyle.logo}
          style={styles.cardLogo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.cardNumberContainer}>
        <Text style={styles.cardNumberText}>
          •••• •••• •••• {card.account_id.slice(-4)}
        </Text>
      </View>

      <View style={styles.cardDetails}>
        <View>
          <Text style={styles.cardLabel}>CARD HOLDER</Text>
          <Text style={styles.cardValue}>JOHN SMITH</Text>
        </View>
        <View>
          <Text style={styles.cardLabel}>EXPIRES</Text>
          <Text style={styles.cardValue}>12/25</Text>
        </View>
      </View>

      <View style={styles.usageContainer}>
        <View style={styles.usageHeader}>
          <Text style={styles.usageText}>Credit Usage</Text>
          <Text style={styles.usagePercentage}>
            {Math.round(usagePercentage)}%
          </Text>
        </View>
        <View style={styles.progressBarBackground}>
          <View
            style={[
              styles.progressBarFill,
              {
                width: `${usagePercentage}%`,
                backgroundColor:
                  usagePercentage > 80
                    ? theme.colors.error
                    : currentStyle.accent,
              },
            ]}
          />
        </View>
        <View style={styles.usageAmounts}>
          <Text style={styles.amountText}>
            ${card.last_statement_balance.toFixed(2)}
          </Text>
          <Text style={styles.amountText}>${creditLimit.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.paymentInfo}>
        <View style={styles.paymentItem}>
          <MaterialIcons name="payment" size={24} color="#ffffff" />
          <Text style={styles.paymentText}>
            Min. payment: ${card.minimum_payment_amount.toFixed(2)}
          </Text>
        </View>
        <View style={styles.paymentItem}>
          <MaterialIcons name="event" size={24} color="#ffffff" />
          <Text style={styles.paymentText}>
            Due{" "}
            {new Date(card.next_payment_due_date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </Text>
        </View>
      </View>

      {card.is_overdue && (
        <View style={styles.overdueBadge}>
          <Text style={styles.overdueText}>PAYMENT OVERDUE</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  cardTypeText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 1,
  },
  cardLogo: {
    width: 50,
    height: 30,
  },
  cardNumberContainer: {
    marginBottom: 25,
  },
  cardNumberText: {
    color: "#ffffff",
    fontSize: 18,
    letterSpacing: 2,
    fontFamily: "Courier",
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  cardLabel: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 10,
    marginBottom: 4,
  },
  cardValue: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },
  usageContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  usageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  usageText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
  },
  usagePercentage: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 6,
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 3,
  },
  usageAmounts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountText: {
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: 12,
  },
  paymentInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  paymentItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentText: {
    color: "#ffffff",
    fontSize: 12,
    marginLeft: 6,
  },
  overdueBadge: {
    position: "absolute",
    top: 15,
    right: -10,
    backgroundColor: theme.colors.error,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 12,
    transform: [{ rotate: "15deg" }],
  },
  overdueText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default CreditCardItem;

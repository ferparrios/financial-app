import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Account } from '../types/types';

interface AccountCardProps {
  account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{account.name}</Text>
      <Text style={styles.balance}>
        ${account.balances.current?.toFixed(2)} {account.balances.currency}
      </Text>
      <Text style={styles.details}>•••• {account.mask}</Text>
      <Text style={styles.type}>{account.type} • {account.subtype}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  balance: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2ecc71',
  },
  details: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 4,
  },
  type: {
    fontSize: 14,
    color: '#95a5a6',
  },
});

export default AccountCard;
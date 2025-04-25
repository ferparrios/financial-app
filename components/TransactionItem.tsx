import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Transaction } from '../types/types';
import moment from 'moment';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem= ({ transaction }: TransactionItemProps) => {
  const isNegative = transaction.amount < 0;
  const amountColor = isNegative ? '#e74c3c' : '#2ecc71';
  
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          {transaction.category[0]?.charAt(0) || '$'}
        </Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.merchant}>{transaction.merchant_name || 'Unknown'}</Text>
        <Text style={styles.date}>
          {moment(transaction.date).format('MMM D')} • {transaction.category.join(' > ')}
        </Text>
      </View>
      <Text style={[styles.amount, { color: amountColor }]}>
        {isNegative ? '-' : ''}${Math.abs(transaction.amount).toFixed(2)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  iconContainer: {
    backgroundColor: '#3498db',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  details: {
    flex: 1,
  },
  merchant: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    color: '#95a5a6',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionItem;
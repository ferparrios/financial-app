import AccountCard from "@/components/AccountCard";
import { mockAccounts } from "@/constants/mockData";
import React from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";

const AccountsScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={mockAccounts}
          keyExtractor={(item) => item.account_id}
          renderItem={({ item }) => <AccountCard account={item} />}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: "#f5f5f5",
    paddingTop: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  listContent: {
    paddingHorizontal: 16,
  },
});

export default AccountsScreen;

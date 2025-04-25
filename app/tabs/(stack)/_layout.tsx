import { router, Stack } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import { theme } from "@/constants/theme";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerLeft: () => (
          <Pressable onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
        ),
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen
        name="dashboard/index"
        options={{
          title: "Financial Summary",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="forgot-passwrord/index"
        options={{
          title: "Forgot Password",
        }}
      />
      <Stack.Screen
        name="accounts/index"
        options={{
          title: "My Accounts",
        }}
      />
      <Stack.Screen
        name="credit-cards/index"
        options={{
          title: "My Cards",
        }}
      />
      <Stack.Screen
        name="transactions/index"
        options={{
          title: "My Transactions",
        }}
      />
    </Stack>
  );
};

export default StackLayout;

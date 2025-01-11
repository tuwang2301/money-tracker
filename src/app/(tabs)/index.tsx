import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
} from "react-native";
import COLORS from "@/src/constants/color";
import Balance from "@/src/components/home/Balance";
import { PieChart } from "react-native-chart-kit";
import IncomeExpenseChart from "@/src/components/home/IncomeExpenseChart";
import ExpenseChart from "@/src/components/home/ExpenseChart";

const recentTransactions = [
  { id: "1", amount: 100, type: "Income", date: "2024-01-10" },
  { id: "2", amount: -50, type: "Expense", date: "2024-01-09" },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Balance Section */}
      <Balance />

      {/* Chart Section (Placeholder) */}
      <IncomeExpenseChart />

      <ExpenseChart />

      {/* Recent Transactions */}
      <Text style={styles.sectionTitle}>Recent Transactions</Text>

      <ExpenseChart />

      <ExpenseChart />

      <ExpenseChart />

      <ExpenseChart />

      <ExpenseChart />

      {/* Quick Actions */}
      <Button title="Add New Transaction" onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: "100%",
  },
  balanceTitle: { fontSize: 20, fontWeight: "bold" },
  balance: { fontSize: 36, fontWeight: "bold", marginVertical: 10 },
  chartPlaceholder: {
    height: 150,
    backgroundColor: COLORS.border,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 },
  transactionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
});

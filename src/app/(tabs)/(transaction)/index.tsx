import ListTransaction from "@/src/components/transaction/ListTransaction";
import TransactionFilterBar from "@/src/components/transaction/TransactionFilterBar";
import TransactionHeader from "@/src/components/transaction/TransactionHeader";
import COLORS from "@/src/constants/color";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const TransactionScreen = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 250,
          justifyContent: "space-between",
          paddingVertical: 20,
        }}
      >
        <TransactionHeader />
        <TransactionFilterBar />
      </View>
      <ListTransaction />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLORS.background,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 24,
    marginVertical: 20,
    color: COLORS.text,
  },
  title: {
    fontSize: 24,
  },
});

export default TransactionScreen;

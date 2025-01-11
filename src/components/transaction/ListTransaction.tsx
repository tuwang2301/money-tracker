import ListItem from "@/src/components/transaction/ListItem";
import COLORS from "@/src/constants/color";
import { ITransaction } from "@/src/types/transaction";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const DATA: { title: string; data: ITransaction[] }[] = [
  {
    title: "Today",
    data: [
      {
        amount: 100000,
        category: "Food",
        date: "2024-01-10",
        icon: "🍔",
        id: 1,
        name: "Burger",
        type: "Income",
      },
      {
        amount: 100000,
        category: "Food",
        date: "2024-01-10",
        icon: "🍔",
        id: 2,
        name: "Burger",
        type: "Income",
      },
      {
        amount: 100000,
        category: "Food",
        date: "2024-01-10",
        icon: "🍔",
        id: 3,
        name: "Burger",
        type: "Income",
      },
    ],
  },
  {
    title: "Yesterday",
    data: [
      {
        amount: 100000,
        category: "Food",
        date: "2024-01-10",
        icon: "🍔",
        id: 5,
        name: "Burger",
        type: "Expense",
      },
      {
        amount: 100000,
        category: "Food",
        date: "2024-01-10",
        icon: "🍔",
        id: 5,
        name: "Burger",
        type: "Expense",
      },
      {
        amount: 100000,
        category: "Food",
        date: "2024-01-10",
        icon: "🍔",
        id: 5,
        name: "Burger",
        type: "Expense",
      },
      {
        amount: 100000,
        category: "Food",
        date: "2024-01-10",
        icon: "🍔",
        id: 5,
        name: "Burger",
        type: "Expense",
      },
      {
        amount: 100000,
        category: "Food",
        date: "2024-01-10",
        icon: "🍔",
        id: 5,
        name: "Burger",
        type: "Expense",
      },
      {
        amount: 100000,
        category: "Food",
        date: "2024-01-10",
        icon: "🍔",
        id: 5,
        name: "Burger",
        type: "Expense",
      },
    ],
  },
];

const ListTransaction = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.id.toString() + index.toString()}
        renderItem={({ item, index }) => (
          <ListItem
            id={item.id.toString()}
            amount={`${item.amount}`}
            title={item.name}
            iconName="fast-food"
            subTitle={item.date}
            type={item.type}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 500,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 24,
    marginVertical: 15,
    color: COLORS.text,
  },
  title: {
    fontSize: 24,
  },
});

export default ListTransaction;

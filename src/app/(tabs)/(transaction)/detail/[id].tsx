import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function TransactionDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Transaction Detail for ID: {id}</Text>
    </View>
  );
}

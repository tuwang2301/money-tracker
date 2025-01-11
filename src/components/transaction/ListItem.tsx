import COLORS from "@/src/constants/color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Link, useRouter } from "expo-router";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

type Props = {
  iconName: keyof typeof Ionicons.glyphMap;
  amount: string;
  title: string;
  subTitle: string;
  type: "Income" | "Expense";
  id: string;
};

const ListItem = ({ amount, iconName, title, subTitle, type, id }: Props) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/(tabs)/(transaction)/detail/${id}`);
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "white",
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          margin: 5,
        }}
      >
        {/* Icon Section */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            backgroundColor: COLORS.primaryButton,
            width: 50,
            borderRadius: 10,
          }}
        >
          <Ionicons name={iconName} size={24} color="white" />
        </View>

        {/* Text Section */}
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
          <Text style={{ fontSize: 12 }}>{subTitle}</Text>
        </View>

        {/* Amount Section */}
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color:
                type === "Expense"
                  ? COLORS.secondaryButton
                  : COLORS.primaryButton,
            }}
          >
            {type === "Expense" ? "-" : "+"}
            {amount}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

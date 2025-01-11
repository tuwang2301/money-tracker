import { Stack, Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "@/src/constants/color";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

export default function RootLayout() {
  const { t } = useTranslation();
  return (
    <Tabs
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof AntDesign.glyphMap = "antdesign";
            if (route.name === "index") {
              iconName = "home";
            } else if (route.name === "(transaction)") {
              iconName = "table";
            } else if (route.name === "profile") {
              iconName = "user";
            }
            return (
              <AntDesign
                name={iconName}
                size={20}
                color={color}
                weight={focused ? "bold" : "regular"}
              />
            );
          },
          tabBarActiveTintColor: COLORS.secondaryButton,
          tabBarVariant: "uikit",
        };
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ headerShown: true, title: t("Money Tracker") }}
      />
      <Tabs.Screen
        name="(transaction)"
        options={{ headerShown: false, title: t("Transaction") }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, title: t("Profile") }}
      />
    </Tabs>
  );
}

// src/components/CustomButton.tsx
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import COLORS from "../constants/color";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  bgColor?: string;
  textColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  bgColor = COLORS.primaryButton,
  textColor = "white",
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? COLORS.secondaryButton : bgColor },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5, // For Android shadow effect
    shadowColor: "#000", // For iOS shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.8,
  },
});

export default CustomButton;

// src/components/PasswordInput.tsx
import React, { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"; // Feather Icons for visibility toggle
import COLORS from "@/src/constants/color";

interface TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const CustomTextInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={COLORS.text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: COLORS.text,
  },
  icon: {
    padding: 10,
  },
});

export default CustomTextInput;

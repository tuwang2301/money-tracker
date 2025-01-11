// src/components/PasswordInput.tsx
import React, { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"; // Feather Icons for visibility toggle
import COLORS from "@/src/constants/color";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import CustomIconButton from "./CustomIconButton";

interface TextInputProps {
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  suffix?: React.ReactNode;
}

const CustomTextInput: React.FC<TextInputProps> = ({
  value,
  onChangeText,
  placeholder,
  suffix,
}) => {
  const [focused, setFocused] = useState(false);

  const focusedStyle = useAnimatedStyle(() => ({
    borderWidth: withTiming(focused ? 3 : 1, { duration: 300 }),
  }));

  return (
    <Animated.View style={[styles.container, focusedStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor={COLORS.text}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <View>{suffix}</View>
    </Animated.View>
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
    boxSizing: "border-box",
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

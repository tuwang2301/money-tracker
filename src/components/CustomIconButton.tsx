import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, View } from "react-native";
import COLORS from "../constants/color";

type Props = {
  onPress: () => void;
  iconName: keyof typeof Ionicons.glyphMap;
  buttonSize?: number;
  iconSize?: number;
  color?: string;
  style?: any;
  backgroundColor?: string;
};

const CustomIconButton = ({
  iconName,
  onPress,
  buttonSize = 36,
  iconSize = 24,
  color = "white",
  backgroundColor = COLORS.secondaryButton,
}: Props) => {
  return (
    <View
      style={{
        width: buttonSize,
        height: buttonSize,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
        borderRadius: 12,
      }}
    >
      <Pressable onPress={onPress}>
        <Ionicons name={iconName} size={iconSize} color={color} />
      </Pressable>
    </View>
  );
};

export default CustomIconButton;

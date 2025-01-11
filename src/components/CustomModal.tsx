import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  DimensionValue,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import COLORS from "../constants/color";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  upperHeight?: DimensionValue;
  title?: string;
};

const CustomModal = ({
  children,
  onClose,
  visible,
  upperHeight = "20%",
  title = "Modal",
  footer,
}: Props) => {
  return (
    <Modal
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
      transparent={true}
    >
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          flex: 1,
        }}
      >
        <Pressable style={{ height: upperHeight }} onPress={onClose} />
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>{title}</Text>
            <Pressable onPress={onClose}>
              <Ionicons name="close" size={24} color={COLORS.secondaryButton} />
            </Pressable>
          </View>
          <View style={{ flex: 1 }}>{children}</View>
          <View
            style={{
              padding: 20,
              borderTopWidth: 1,
              borderTopColor: COLORS.border,
              display: footer ? "flex" : "none",
            }}
          >
            {footer}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

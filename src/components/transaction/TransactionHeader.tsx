import React from "react";
import { Text, View } from "react-native";
import CustomIconButton from "../CustomIconButton";
import COLORS from "@/src/constants/color";
import { useTranslation } from "react-i18next";

const TransactionHeader = () => {
  const { t } = useTranslation();
  return (
    <View style={{ marginHorizontal: 16, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: COLORS.text }}>
          {t("Your transactions")}
        </Text>
        <CustomIconButton
          iconName="add"
          onPress={() => {}}
          buttonSize={48}
          iconSize={36}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flex: 4,
        }}
      >
        <Text style={{ fontSize: 50, fontWeight: "900", color: "white" }}>
          200.000 VND
        </Text>
      </View>
    </View>
  );
};

export default TransactionHeader;

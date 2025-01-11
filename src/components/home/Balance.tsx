import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";

const Balance = () => {
  const { t } = useTranslation();
  return (
    <View style={{ width: "100%", marginVertical: 10 }}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{t("balance")}</Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 35 }}>200.000 VND</Text>
      </View>
    </View>
  );
};

export default Balance;

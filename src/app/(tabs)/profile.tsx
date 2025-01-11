import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

const ProfileScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value).catch((err) => console.log(err));
  };

  return (
    <View>
      <Text>{t("hello")}</Text>
      <Text>
        {t("language")} {i18n.language}
      </Text>
      <RadioButton.Group
        onValueChange={(newValue) => changeLanguage(newValue)}
        value={i18n.language}
      >
        <View>
          <Text>English</Text>
          <RadioButton value="en" />
        </View>
        <View>
          <Text>Vietnamese</Text>
          <RadioButton value="vi" />
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default ProfileScreen;

import { Link } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Pressable, Text, View } from "react-native";
import "../i18n/index";

export default function Index() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [showModal, setShowModal] = useState(false);

  const changeLanguage = (value: string) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch((err) => console.log(err));
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Modal animationType="slide" visible={showModal} transparent={true}>
        <Pressable style={{ opacity: 0.5, backgroundColor: "gray" }} />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 20,
          }}
        >
          <Text onPress={() => setShowModal(false)}>Hello</Text>
        </View>
      </Modal>

      <Text onPress={() => setShowModal(true)} style={{ marginBottom: 10 }}>
        {language}
      </Text>
      <Text>{t("hello")}</Text>
      <Pressable onPress={() => changeLanguage("vi")}>
        <Text>{t("this line is translated")}</Text>
      </Pressable>
      <Link href="/(auth)/login">Login</Link>
    </View>
  );
}

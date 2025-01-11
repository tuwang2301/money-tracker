import PasswordInput from "@/src/components/auth/PasswordInput";
import CustomButton from "@/src/components/CustomButton";
import CustomTextInput from "@/src/components/CustomTextInput";
import COLORS from "@/src/constants/color";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <CustomTextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
        <PasswordInput value={password} onChangeText={setPassword} />
        <CustomButton
          title="Login"
          onPress={() => {
            router.replace("/(tabs)");
          }}
        />
        <View
          style={{
            width: "100%",
            height: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <View
            style={{ flex: 1, height: 1, backgroundColor: COLORS.border }}
          />
          <Text style={{ color: COLORS.text }}>OR</Text>
          <View
            style={{ flex: 1, height: 1, backgroundColor: COLORS.border }}
          />
        </View>
        <CustomButton
          title="Register"
          onPress={() => {
            router.push("/(auth)/register");
          }}
          bgColor={COLORS.secondaryButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  card: {
    width: "80%",
    padding: 30,
    borderRadius: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 4,
    borderBottomColor: COLORS.border,
  },
});

export default LoginScreen;

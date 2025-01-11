import PasswordInput from "@/src/components/auth/PasswordInput";
import CustomButton from "@/src/components/CustomButton";
import CustomTextInput from "@/src/components/CustomTextInput";
import COLORS from "@/src/constants/color";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Register</Text>
        <CustomTextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
        <PasswordInput value={password} onChangeText={setPassword} />
        <PasswordInput
          value={password}
          onChangeText={setPassword}
          placeholder="Re-enter your password"
        />
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

export default RegisterScreen;

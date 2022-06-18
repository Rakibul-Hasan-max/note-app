import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

export default function Login() {
  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/login.png")}
        style={{ width: 350, height: 250, alignSelf: "center" }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          fontWeight: "500",
          marginBottom: 20,
        }}
      >
        "Never forget your notes"
      </Text>
      <View style={{ padding: 16 }}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <Button
          title={"Login"}
          customStyles={{ alignSelf: "center", marginTop: 40 }}
        />
      </View>
      <View style={styles.signup}>
        <Text style={{ marginRight: 10, fontWeight: "500" }}>
          Don't have an account?
        </Text>
        <Pressable>
          <Text style={{ color: "green", fontWeight: "700" }}>Sign up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  signup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
});

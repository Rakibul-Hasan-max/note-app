import { signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { auth } from "../../App";

export default function Login({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigateToSignUp = () => {
    navigation.navigate("Signup");
  };

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("successful login", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/login.png")}
        style={{ width: 350, height: 250, alignSelf: "center" }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: spacing[4],
          fontWeight: "500",
          marginBottom: spacing[5],
        }}
      >
        "Never forget your notes"
      </Text>
      <View style={{ padding: spacing[4] }}>
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />

        {/* {error && <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>} */}

        {/* {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            onPress={login}
            title={"Login"}
            customStyles={{ alignSelf: "center", marginTop: spacing[10] }}
          />
        )} */}

        <Button
          onPress={login}
          title={"Login"}
          customStyles={{ alignSelf: "center", marginTop: spacing[10] }}
        />
      </View>
      <View style={styles.signup}>
        <Text style={{ marginRight: 10, fontWeight: "500" }}>
          Don't have an account?
        </Text>
        <Pressable onPress={navigateToSignUp}>
          <Text style={{ color: colors.green, fontWeight: "700" }}>
            Sign up
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingHorizontal: spacing[3],
    marginBottom: spacing[5],
  },
  signup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
});

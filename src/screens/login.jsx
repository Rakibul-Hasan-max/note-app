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
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Login({ navigation }) {
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
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <Button
          title={"Login"}
          customStyles={{ alignSelf: "center", marginTop: spacing[10] }}
        />
      </View>
      <View style={styles.signup}>
        <Text style={{ marginRight: 10, fontWeight: "500" }}>
          Don't have an account?
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
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

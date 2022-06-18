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

export default function Signup() {
  const selected = true;

  return (
    <SafeAreaView>
      <View style={{ padding: spacing[4] }}>
        <TextInput placeholder="Full Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TextInput placeholder="Phone" style={styles.input} />
        <TextInput placeholder="Age" style={styles.input} />
        <Pressable style={styles.radioContainer}>
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle} />
          </View>
          <Text style={styles.radioText}>Male</Text>
        </Pressable>
        <Pressable style={styles.radioContainer}>
          <View
            style={[styles.outerCircle, selected && styles.selectedOuterCircle]}
          >
            <View
              style={[
                styles.innerCircle,
                selected && styles.selectedInnerCircle,
              ]}
            />
          </View>
          <Text style={styles.radioText}>Female</Text>
        </Pressable>
        <Button
          title={"Sign Up"}
          customStyles={{ alignSelf: "center", marginTop: spacing[10] }}
        />
      </View>
      <View style={styles.signup}>
        <Text style={{ marginRight: 10, fontWeight: "500" }}>
          Already have an account?
        </Text>
        <Pressable>
          <Text style={{ color: colors.green, fontWeight: "700" }}>Login</Text>
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
    marginTop: 30,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  outerCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cfcfcf",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#cfcfcf",
  },
  radioText: {
    marginLeft: spacing[2],
  },
  selectedOuterCircle: {
    borderColor: colors.orange,
  },
  selectedInnerCircle: {
    borderColor: colors.orange,
    backgroundColor: colors.orange,
  },
});

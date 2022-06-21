import React from "react";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import { auth, db } from "../../App";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { showMessage } from "react-native-flash-message";

const genderOptions = ["Male", "Female"];

export default function Signup() {
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const signup = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        password: password,
        phone: phone,
        age: age,
        gender: gender,
        uid: result.user.uid,
      });
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
      showMessage({
        message: "ERROR",
        type: "danger"
      });
    }
  };

  return (
    <SafeAreaView>
      <View style={{ padding: spacing[4] }}>
        <TextInput
          onChangeText={(text) => setName(text)}
          placeholder="Full Name"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          onChangeText={(text) => setPhone(text)}
          placeholder="Phone"
          style={styles.input}
        />
        <TextInput
          onChangeText={(text) => setAge(text)}
          placeholder="Age"
          style={styles.input}
        />

        {/* radio button selection */}
        {genderOptions.map((option) => {
          const selected = option === gender;
          return (
            <Pressable
              onPress={() => setGender(option)}
              key={option}
              style={styles.radioContainer}
            >
              <View
                style={[
                  styles.outerCircle,
                  selected && styles.selectedOuterCircle,
                ]}
              >
                <View
                  style={[
                    styles.innerCircle,
                    selected && styles.selectedInnerCircle,
                  ]}
                />
              </View>
              <Text style={styles.radioText}>{option}</Text>
            </Pressable>
          );
        })}

        <Button
          onPress={signup}
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

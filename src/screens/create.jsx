import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing } from "../theme/spacing";
import { TextInput } from "react-native";
import { colors } from "../theme/colors";
import Button from "../components/Button";
import { db } from "../../App";
import { addDoc, collection } from "firebase/firestore";
import { showMessage } from "react-native-flash-message";

const noteColorOptions = ["red", "blue", "green"];

export default function Create({ navigation, route, user }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [noteColor, setNoteColor] = useState("green");
  const [loading, setLoading] = useState(false);

  console.log("user uid---->", user.uid);

  const onPressCreate = async () => {
    setLoading(true);
    try {
      await addDoc(collection(db, "notes"), {
        title: title,
        description: description,
        color: noteColor,
        uid: user.uid,
      });
      setLoading(false);
    } catch (error) {
      console.log("error", error);
      showMessage({
        message: "Save Failed",
        type: "danger",
      });
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
      <TextInput
        placeholder="Title"
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        multiline={true}
        onChangeText={(text) => setDescription(text)}
        style={styles.input}
      />

      <View>
        <Text style={{ marginTop: 50, marginBottom: 20 }}>Note Theme</Text>
        {noteColorOptions.map((option) => {
          const selected = option === noteColor;
          return (
            <Pressable
              onPress={() => setNoteColor(option)}
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
      </View>

      <View>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Button
            onPress={onPressCreate}
            title={"Save"}
            customStyles={{ alignSelf: "center", marginTop: spacing[10] }}
          />
        )}
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

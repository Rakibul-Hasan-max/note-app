import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { spacing } from "../theme/spacing";

export default function Home({ navigation, route, user }) {
  console.log("object", user);

  const onPressCreate = () => {
    navigation.navigate("Create");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={{ fontSize: spacing[5], fontWeight: "bold" }}>
          My Notes
        </Text>
        <Pressable onPress={onPressCreate}>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "space-between",
    padding: 20,
  },
});

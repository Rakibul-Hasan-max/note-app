import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { spacing } from "../theme/spacing";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db, auth } from "../../App";
import { colors } from "../theme/colors";
import { signOut } from "@firebase/auth";
import { ThemeContext } from "../theme/ThemeContext";

export default function Home({ navigation, route, user }) {
  const [notes, setNotes] = useState([]);
  const { theme, isDark, toggleTheme, colors: themeColors } = useContext(ThemeContext);


  useEffect(() => {
    const q = query(collection(db, "notes"), where("uid", "==", user.uid));

    const noteListener = onSnapshot(q, (querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setNotes(list);
    });

    return noteListener;
  }, []);

  const renderItem = ({ item }) => {
    const { title, description, color } = item;
    return (
      <Pressable
        style={{
          minHeight: 60,
          backgroundColor: color,
          marginBottom: 25,
          borderRadius: 15,
          padding: 15,
        }}
        onPress={() => {
          navigation.navigate("Edit", { item });
        }}
      >
        <Pressable
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            paddingVertical: 10,
            paddingRight: 40,
          }}
        >
          <FontAwesome name="edit" size={26} color="white" />
        </Pressable>

        <Pressable
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            padding: 10,
            zIndex: 4,
          }}
          onPress={() => {
            deleteDoc(doc(db, "notes", item.id));
          }}
        >
          <AntDesign name="delete" size={24} color="white" />
        </Pressable>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          {title}
        </Text>
        <Text style={{ fontSize: 14, color: "white", marginTop: 5 }}>
          {description}
        </Text>
      </Pressable>
    );
  };

  const onPressCreate = () => {
    navigation.navigate("Create");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
      <View style={styles.header}>
        <Text style={{ fontSize: spacing[5], fontWeight: "bold", color: themeColors.text }}>
          My Notes
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Pressable onPress={toggleTheme} style={{ marginRight: 20 }}>
            <MaterialIcons
              name={isDark ? "light-mode" : "dark-mode"}
              size={24}
              color={themeColors.iconColor}
            />
          </Pressable>
          <Pressable onPress={() => signOut(auth)}>
            <MaterialIcons name="logout" size={24} color={themeColors.iconColor} />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={notes}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
            contentContainerStyle={{ padding: 20 }}
          />
        </View>
      </ScrollView>
      <View>
        <Pressable onPress={onPressCreate} style={styles.createIcon}>
          <AntDesign name="pluscircleo" size={spacing[10]} color="orange" />
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
  createIcon: {
    alignSelf: "flex-end",
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 5,
  },
});

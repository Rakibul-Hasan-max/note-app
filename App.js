import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/home";
import Login from "./src/screens/login";
import Signup from "./src/screens/signup";
import Create from "./src/screens/create";
import Edit from "./src/screens/edit";
import { colors } from "./src/theme/colors";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import FlashMessage from "react-native-flash-message";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyBCmaAsr41rMAKJvhxQzFXDOwNyeG0xQo0",
  authDomain: "my-note-diary.firebaseapp.com",
  projectId: "my-note-diary",
  storageBucket: "my-note-diary.appspot.com",
  messagingSenderId: "342188110353",
  appId: "1:342188110353:web:2167f5d5091cddae6db7b0",
  measurementId: "G-V1QY6NYW4N",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null); //not authenticated

  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
      }
    });
    return authSubscription;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Create" component={Create} />
            <Stack.Screen name="Edit" component={Edit} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

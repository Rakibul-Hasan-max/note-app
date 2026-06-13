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
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import FlashMessage from "react-native-flash-message";
import React, { useEffect, useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, ThemeContext } from "./src/theme/ThemeContext";

const firebaseConfig = {
  apiKey: "AIzaSyBCmaAsr41rMAKJvhxQzFXDOwNyeG0xQo0",
  authDomain: "my-note-diary.firebaseapp.com",
  projectId: "my-note-diary",
  storageBucket: "my-note-diary.appspot.com",
  messagingSenderId: "342188110353",
  appId: "1:342188110353:web:2167f5d5091cddae6db7b0",
  measurementId: "G-V1QY6NYW4N",
  url: "https://my-note-diary.firebaseio.com",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

const Stack = createNativeStackNavigator();

function MainApp() {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null); //not authenticated
  const { theme, colors: themeColors } = useContext(ThemeContext);

  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return authSubscription;
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: themeColors.background }}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }

  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: themeColors.background,
    },
  };

  return (
    <NavigationContainer theme={AppTheme}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: themeColors.background,
          },
          headerTintColor: themeColors.text,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {user ? (
          <>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {(props) => <Home {...props} user={user} />}
            </Stack.Screen>

            <Stack.Screen name="Create">
              {(props) => <Create {...props} user={user} />}
            </Stack.Screen>

            <Stack.Screen name="Edit">
              {(props) => <Edit {...props} user={user} />}
            </Stack.Screen>
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
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}


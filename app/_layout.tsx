import { useFonts } from "expo-font";
import { Stack, Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  const [indexFocused, setIndexFocused] = useState(true);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: () => (
            indexFocused ? 
            <MaterialIcons name="add-shopping-cart" size={39} color="black" /> : 
            <MaterialIcons name="add-shopping-cart" size={32} color="darkgray" />
          ),
          tabBarItemStyle: indexFocused
            ? styles.tabBarItem
            : styles.tabBarItemFocused,
          headerTitle: "Adaugă o nouă cheltuială",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
        }}
        listeners={{
          tabPress: () => {
            setIndexFocused(true);
          },
        }}
      />
      <Tabs.Screen
        name="browse"
        options={{
          title: "",
          tabBarIcon: () => (
            !indexFocused ?
            <MaterialIcons name="history" size={42} color="black" /> : 
            <MaterialIcons name="history" size={34} color="gray" />
          ),
          tabBarIconStyle: !indexFocused
            ? styles.tabBarItem
            : styles.tabBarItemFocused,
          tabBarItemStyle: styles.tabBarItem,
          headerTitle: "Vizualizare cheltuieli",
          headerTitleAlign: "center",
          headerTitleStyle: styles.title,
        }}
        listeners={{
          tabPress: () => {
            setIndexFocused(false);
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "MontserratSemiBold",
    fontSize: 22,
  },
  header: {},
  tabBar: {
    height: 80,
    paddingTop: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderTopWidth: 1,
    borderColor: "gray",
    borderTopColor: "gray",
    margin: 100,
    marginBottom: 25,
  },
  tabBarIcon: {},
  tabBarItem: {},
  tabBarItemFocused: {},
});

import { Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import React from "react";

export default function Browse() {
  let [fontsLoaded] = useFonts({
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
       
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Montserrat",
    fontSize: 20,
  },
  header: {},
  tabBar: {
    height: 80,
    borderRadius: 0,
    borderWidth: 0,
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    paddingTop: 10,
  },
  tabBarIcon: {},
  tabBarItem: {},
  tabBarItemFocused: {},
});

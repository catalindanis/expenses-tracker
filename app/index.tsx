import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import React from "react";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Index() {
  let [fontsLoaded] = useFonts({
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  const [portofel, setPortofel] = useState("");
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const [incasat, setIncasat] = useState(false);
  const toggleSwitch = () => setIncasat((previousState) => !previousState);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View>
        <View style={styles.valueField}>
          <Text style={styles.fieldTitle}>Valoare:</Text>
          <TextInput
            style={styles.valueInputField}
            keyboardType="numeric"
          ></TextInput>
        </View>
        <View style={styles.descriptionField}>
          <Text style={styles.fieldTitle}>Descriere:</Text>
          <TextInput
            style={styles.descriptionInputField}
            multiline={true}
          ></TextInput>
        </View>

        <View style={{ marginBottom: 30 }}>
          <Dropdown
            data={data}
            maxHeight={300}
            style={styles.dropdown}
            placeholderStyle={styles.dropdownPlaceholder}
            itemTextStyle={styles.dropdownPlaceholder}
            selectedTextStyle={styles.dropdownPlaceholder}
            labelField="label"
            valueField="value"
            placeholder="Selectează portofel"
            value={portofel}
            onChange={(item) => {
              setPortofel(item.value);
            }}
          />
        </View>

        <View style={{ marginBottom: 30, justifyContent: "center" }}>
          <Switch
            style={{position: "absolute"}}
            trackColor={{ false: "#767577", true: "#767577" }}
            thumbColor={incasat ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={incasat}
          />
          <Text
            style={{
              position: "absolute",
              marginLeft: 50,
              fontFamily: "MontserratSemiBold",
            }}
          >
            Încasat
          </Text>
        </View>
      </View>

      <View style={incasat ? styles.submitButtonIncasat : styles.submitButtonPlata}>
        <Pressable>
          <Text
            style={{
              fontFamily: "MontserratBold",
              fontSize: 16,
            }}
          >
            Adaugă
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  valueField: {},
  fieldTitle: {
    fontFamily: "Montserrat",
    fontSize: 25,
  },
  valueInputField: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    height: 50,
    width: 150,
    fontFamily: "Montserrat",
    fontSize: 20,
    paddingLeft: 5,
    marginBottom: 15,
  },
  descriptionField: {},
  descriptionInputField: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    height: 100,
    width: 250,
    fontFamily: "Montserrat",
    fontSize: 20,
    paddingLeft: 5,
    paddingTop: 5,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  submitButtonPlata: {
    width: 220,
    height: 70,
    borderRadius: 5,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonIncasat: {
    width: 220,
    height: 70,
    borderRadius: 5,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  dropdown: {
    width: 200,
  },
  dropdownPlaceholder: {
    fontFamily: "MontserratSemiBold",
    marginLeft: 0,
    paddingLeft: 0,
    maxHeight: 30,
    maxWidth: 200,
  },
});

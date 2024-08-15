import {
  KeyboardAvoidingView,
  Modal,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import { useFonts } from "expo-font";
import React, { useRef } from "react";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { db } from "./firebase/firebaseConfig";
import { ref, set } from "firebase/database";
import { Double, Float } from "react-native/Libraries/Types/CodegenTypes";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Index() {
  let [fontsLoaded] = useFonts({
    MontserratLight: require("../assets/fonts/Montserrat-Light.ttf"),
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  const [valoare, setValoare] = useState("");
  const [descriere, setDescriere] = useState("");

  set(ref(db, "/"), {
    ultimulIdPortofel: 0,
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

  const [showModal, setShowModal] = useState(false);

  const inputRef = useRef();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Modal
        transparent={true}
        visible={showModal}
        animationType={"fade"}
        statusBarTranslucent={true}
        onShow={() => {
          setTimeout(() => {
            inputRef?.current?.focus()
          }, 50)
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <View
            style={{
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 5,
              height: 180,
              width: 320,
              backgroundColor: "white",
            }}
          >
            <Text
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                fontFamily: "MontserratSemiBold",
                fontSize: 20,
              }}
            >
              Numele portofelului
            </Text>
            <Pressable
              onPress={() => {
                setShowModal(false);
              }}
            >
              <AntDesign
                name="close"
                size={24}
                color="black"
                style={{ position: "absolute", top: 3, right: 5 }}
              />
            </Pressable>
            <TextInput
              style={{
                position: "absolute",
                top: 40,
                left: 14,
                width: 290,
                height: 50,
                fontSize: 20,
                fontFamily: "Montserrat",
                borderWidth: 1,
                borderRadius: 5,
              }}
              ref={inputRef}
              autoFocus={false}
            ></TextInput>
            <View
              style={{
                position: "absolute",
                bottom: 25,
                width: 200,
                height: 50,
                backgroundColor: "gray",
                borderRadius: 5,
                left: 57,
              }}
            >
              <Pressable
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontFamily: "MontserratBold", fontSize: 16 }}>
                  Creare
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          justifyContent: "center",
          width: 140,
          height: 40,
        }}
      >
        <Pressable
          style={{
            justifyContent: "center",
            borderWidth: 1,
            width: 140,
            height: 40,
            borderRadius: 5,
          }}
          onPress={() => {
            setShowModal(true);
          }}
        >
          <Text
            style={{
              position: "absolute",
              right: 40,
              fontFamily: "MontserratSemiBold",
            }}
          >
            Portofel nou
          </Text>
          <MaterialCommunityIcons
            style={{ position: "absolute", right: 0 }}
            name="wallet-plus-outline"
            size={34}
            color="black"
          />
        </Pressable>
      </View>

      <View
        style={
          !showModal
            ? {
                marginTop: 60,
                justifyContent: "center",
                alignItems: "center",
              }
            : {
                marginTop: 60,
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.3,
              }
        }
      >
        <View>
          <View style={styles.valueField}>
            <Text style={styles.fieldTitle}>Valoare:</Text>
            <TextInput
              onChangeText={(value) => {
                setValoare(value);
              }}
              value={valoare}
              style={styles.valueInputField}
              keyboardType="numeric"
            ></TextInput>
          </View>
          <View style={styles.descriptionField}>
            <Text style={styles.fieldTitle}>Descriere:</Text>
            <TextInput
              onChangeText={(value) => {
                setDescriere(value);
              }}
              value={descriere}
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
              style={{ position: "absolute" }}
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

        <View
          style={
            incasat ? styles.submitButtonIncasat : styles.submitButtonPlata
          }
        >
          <Pressable
            style={{
              width: 220,
              height: 70,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              addExpense(parseFloat(valoare), descriere, portofel, incasat);
            }}
          >
            <Text
              style={{
                fontFamily: "MontserratBold",
                fontSize: 18,
              }}
            >
              Adaugă
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

function addExpense(value: Float, description: any, walletId: any, type: any) {
  set(ref(db, "portofel" + walletId + "/" + "1"), {
    id: "1",
    valoare: value,
    descriere: description,
    idPortofel: walletId,
    tip: type,
  });
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
    width: 125,
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

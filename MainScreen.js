// MainScreen.js
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { db } from "./firestoreConfig";
import { collection, addDoc } from "firebase/firestore";

export default function MainScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!name || !email) {
      alert("Please fill in both fields");
      return;
    }

    try {
      await addDoc(collection(db, "users"), { name, email });
      alert("Data saved successfully"); 
      setName("");
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Error saving data");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />

      <Text style={styles.label}>Enter your Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />

      <Button title="Submit" onPress={handleSubmit} />
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
});
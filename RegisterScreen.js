// RegisterScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firestoreConfig";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    console.log("REGISTER BUTTON CLICKED"); // Debug line
    console.log("Email:", email, "Password:", password); // Debug line
    
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }
    
    if (password.length < 6) {
      Alert.alert("Error", "Password must be at least 6 characters");
      return;
    }

    console.log("Calling Firebase..."); // Debug line
    
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Registration successful!"); // Debug line
        Alert.alert("Account created!");
        navigation.navigate("Main");
      })
      .catch((e) => {
        console.log("Registration error:", e); // Debug line
        Alert.alert("Error", e.message);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <TextInput 
        placeholder="Email" 
        value={email}
        onChangeText={setEmail} 
        style={{ margin: 5, borderWidth: 1, padding: 8 }} 
      />
      <TextInput 
        placeholder="Password" 
        value={password}
        secureTextEntry 
        onChangeText={setPassword} 
        style={{ margin: 5, borderWidth: 1, padding: 8 }} 
      />
      <Button title="Register" onPress={register} />
      <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
      
      {/* TEST BUTTON */}
      <Button title="TEST BUTTON" onPress={() => {
        console.log("TEST BUTTON CLICKED");
        Alert.alert("Test", "Button works!");
      }} />
    </View>
  );
}
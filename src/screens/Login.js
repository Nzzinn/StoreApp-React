import React, { useState } from "react";
import { Text } from "react-native";
import BackgroundApp from "../components/BackgroundApp";
import { StyleSheet, View } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false); 
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    setIsEmailError(false);
    setIsPasswordEmpty(false);

    if (!validateEmail(email)) {
      setIsEmailError(true);
      setEmailErrorMessage("E-mail inválido");
      return;
    }

    if (password.trim() === "") {
      setIsPasswordEmpty(true);
      return;
    }

    navigation.navigate("menu");
  };

  return (
    <BackgroundApp>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Store App</Text>
      </View>

      <View style={styles.container}>
        <Input
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          isError={isEmailError}
        />

        {isEmailError && (
          <Text style={{ color: "red" }}>{emailErrorMessage}</Text>
        )}

        <Input
          label="Senha"
          onChangeText={(text) => setPassword(text)}
          value={password}
          isError={isPasswordEmpty}
        />

        {isPasswordEmpty && (
          <Text style={{ color: "red" }}>Todos os campos devem ser preenchidos</Text>
        )}

        <Button
          text="Entrar"
          onPress={handleLogin}
          styleButton={{
            backgroundColor: "#000",
            width: "100%",
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginTop: 50,
          }}
          styleText={{
            color: "#d5d5d5",
            fontSize: 20,
            fontWeight: "bold",
          }}
        />
      </View>
    </BackgroundApp>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "80%",
    marginLeft: 40,
    marginRight: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  containerTitle: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
});

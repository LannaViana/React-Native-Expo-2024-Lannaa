import { StatusBar } from "expo-status-bar";
import { Alert, BackHandler, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../hooks/Auth";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export default function App() {
  const { singIn, signOut } = useAuth();
  const [email, setEmail] = useState("Super@email.com");
  const [password, setPassword] = useState("A123456a!");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const tooglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleEntrarSuper = async () => {
    try {
      await singIn({ email, password });
    } catch (error) {
      Alert.alert("Erro", error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Aplicativo pronto para usar</Text>
      <View style={styles.inputbox}>
        <Ionicons name="mail-open-outline" size={20} color="black" />
        <TextInput 
        style={styles.emailinput} 
        placeholder="E-mail" 
        value={email} 
        onChangeText={setEmail} 
        />
      </View>
      <View style={styles.inputbox}>
        <Ionicons name="lock-closed-outline" size={20} color="black" />
        <TextInput 
        style={styles.emailinput} 
        placeholder="Senha" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry={passwordVisibility}
        />
        <Ionicons 
          name={passwordVisibility ? "eye-off-outline" : "eye-outline"}
          size={20} 
          color="black" 
          onPress={tooglePasswordVisibility} 
          />
      </View>
      
      <Button 
      color="#3f5e31"
      title="Entrar" 
      onPress={handleEntrarSuper} 
      />
      
      <Button color="#3f5e31" title="Sobre" onPress={()=>router.push("/about")} />
        <Button color="#bf3945" title="Sair do Aplicativo" onPress={() => BackHandler.exitApp()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5ca84",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  tittle: {
    fontFamily: "regular",
    fontSize: 20,
  },
  inputbox: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    alignItems: "center",
  },
  emailinput: {
    flex: 1,
    fontFamily: "regular",
    fontSize: 20,
  },
  button: {
    flex: 1,
    
  }
});
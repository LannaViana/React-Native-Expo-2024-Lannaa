import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function About() {
    return (
        <View style={styles.container}>
            <Text>Sobre</Text> 
            <Button title="Voltar" onPress={() => {router.replace("/")}} />
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
});
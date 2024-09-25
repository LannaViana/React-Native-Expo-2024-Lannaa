import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Home() {
    return(
        <View style={styles.container}>
            <Text>Listagem</Text>
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
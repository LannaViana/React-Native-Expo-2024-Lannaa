import { Button, Text, View } from "react-native";
import { useAuth } from "../../hooks/Auth";
import { StyleSheet } from "react-native";


export default function Home() {
    const { signOut } = useAuth();


    return(
        <View style={styles.container}>
            <Text>Home</Text>
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
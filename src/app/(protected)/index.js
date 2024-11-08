import { Button, Text, View } from "react-native";
import { useAuth } from "../../hooks/Auth";
import { StyleSheet } from "react-native";
import { Banner } from "../../components/banner";


export default function Home() {
    return(
        <View style={{ flex: 1 }}>
           <Banner />
        </View>
    );
}


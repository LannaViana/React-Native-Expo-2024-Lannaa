import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

function CustomDrawerContent(props) {
    return (
    <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <TouchableOpacity 
        style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Deslogar</Text>
        </TouchableOpacity>
    </View>
    )
}

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#785a26",}}>
            <Drawer drawerContent={(props) => <CustomDrawerContent{...props} />}>
                <Drawer.Screen
                 name="index" 
                 options={{ 
                    drawerLabel: "Principal", 
                    headerTitle: "Principal", 
                    drawerIcon: () => <Ionicons name="home-outline" size={20} color="black" />,
                 }}
                 />
                <Drawer.Screen 
                name="list" 
                options={{ 
                    drawerLabel: "Listagem", 
                    headerTitle: "Listagem", 
                    drawerIcon: () => <Ionicons name="list-outline" size={20} color="black" />,
 
                }} 
                    />
                <Drawer.Screen 
                name="payments" 
                options={{ 
                    drawerLabel: "Pagamentos", 
                    headerTitle: "Pagamentos",
                    drawerIcon: () => <Ionicons name="card-outline" size={20} color="black" />,
                }} 
                    />
            </Drawer>
        </GestureHandlerRootView>
    );
}

export default function Layout() {
    return DrawerLayout();
}
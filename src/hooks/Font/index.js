import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const FontContext = createContext({})

export function FontProvider ({ children }) {
    const [loaded, error] = useFonts({
       regular: require("../../assets/fonts/NunitoSans_10pt-Regular.ttf"),
       bold: require("../../assets/fonts/NunitoSans_10pt-Bold.ttf"),
       italic: require("../../assets/fonts/NunitoSans_10pt-Italic.ttf"),
       semibold: require("../../assets/fonts/NunitoSans_10pt-SemiBold.ttf"),
       black: require("../../assets/fonts/NunitoSans_7pt-Black.ttf"),
       light: require("../../assets/fonts/NunitoSans_7pt-Light.ttf"),
       medium: require("../../assets/fonts/NunitoSans_7pt-Medium.ttf"),
       bolditalic: require("../../assets/fonts/NunitoSans_7pt-BoldItalic.ttf"),
       blackitalic: require("../../assets/fonts/NunitoSans_7pt-BlackItalic.ttf"),
    })

    if (!loaded && !error) {
        return ( 
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 28, marginTop: 15 }}>
                Carregando fontes...
                </Text>
            <ActivityIndicator size="large" color="0000ff" />
        </View>
      );
}

   return <FontContext.Provider value={{children}}>{children}</FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("FontProvider must be a parent")
    }
}
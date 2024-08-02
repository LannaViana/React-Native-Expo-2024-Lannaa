import { useFonts } from "expo-font";
import { createContext, useContext } from "react";

const FontContext = createContext({})

export function FontProvider ({ children }) {
    const [loaded, error] = useFonts({
       regular: require("../../assets/fonts/NunitoSans_10pt-Regular.ttf"),
       bold: require("../../assets/fonts/NunitoSans_10pt-Bold.ttf"),
       italic: require("../../assets/fonts/NunitoSans_10pt-Italic.ttf"),
       semibold: require("../../assets/fonts/NunitoSans_10pt_SemiCondensed-SemiBold.tff"),
    })
   return <FontContext.Provider value={{children}}> {children} </FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("FontProvider must be a parent")
    }
}
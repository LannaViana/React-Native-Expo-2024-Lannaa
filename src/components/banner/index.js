import { Text, View } from "react-native";
import PagerView from "react-native-pager-view";



export function Banner() {
    return (
        <View style={styles.container}>
           <PagerView>
              <View>
                  <Text>Banner</Text>
              </View>
           </PagerView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
       flex: 1, 
    },
});
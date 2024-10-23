import { Text, View } from "react-native";
import PagerView from "react-native-pager-view";



export function Banner() {
    return (
        <View style={styles.container}>
           <PagerView>
              <View key="1">
                  <Text>Banner 1</Text>
              </View>
              <View key="2">
                  <Text>Banner 2</Text>
              </View>
              <View key="3">
                  <Text>Banner 3</Text>
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
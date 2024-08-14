import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';

export default function App() {
  const { singIn, singOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Aplicativo pronto para usar</Text>
      <Button
       title="Singin Super" 
       onPress={()=>
       singIn({email: "super@email.com", password: "Super123!"})
       } 
       />
       <Button
       title="Singin Adm" 
       onPress={()=>
       singIn({email: "adm@email.com", password: "Adm123!"})
       } 
       />
       <Button
       title="Singin User" 
       onPress={()=>
       singIn({email: "user@email.com", password: "User123!"})
       } 
       />
      <Button title="Singout" onPress={() => signOut()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle: {
    fontFamily: "regular",
    fontSize: 20,
  }
});

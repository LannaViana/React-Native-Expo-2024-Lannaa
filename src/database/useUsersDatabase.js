import { useSQLiteContext } from "expo-sqlite"

export function useUsersDatabase(){
    const database = useSQLiteContext();

async function authUser({email, password}) {
   console.log("authUser email: ", email, " - password: ", password);
   try {
    
   } catch (error) {
    
   }

} 

}
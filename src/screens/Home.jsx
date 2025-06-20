import { View, Text, Platform } from "react-native";
import { COLORS } from "../constants";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import DrawerContent from "@/components/DrawerContent";
import { useAuth } from "@/providers/AuthProvider";


const Home = () => {

  const navigation = useNavigation();

  const {isAuthenticated} = useAuth();

  if(!isAuthenticated) {
    return (
      navigation.navigate("Login")
    )
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      
      <View >
        <DrawerContent/>
      </View>

      <View>
        <Text>test</Text>
      </View>

     
    </View>
  );
};

export default Home;

import { View, Text, Platform } from "react-native";
import { COLORS } from "../constants";
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import DrawerContent from "../components/DrawerContent";


const Home = () => {
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

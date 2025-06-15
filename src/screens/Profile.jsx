import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from "../constants";

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Text>Mon Profil</Text>
    </SafeAreaView>
  );
};

export default Profile;

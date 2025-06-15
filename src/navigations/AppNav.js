import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Welcome from "../screens/Welcome";
import DrawerNav from "./DrawerNav"; // ✅ point important

const Stack = createNativeStackNavigator();

const AppNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Home" component={DrawerNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNav;
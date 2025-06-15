import { View, TouchableOpacity, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../constants";
import { useNavigation } from "@react-navigation/native";

const DrawerContent = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    padding: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                    style={{
                        height: 45,
                        width: 45,
                        justifyContent: "center",
                        backgroundColor: COLORS.primary,
                        alignItems: "center",
                        borderRadius: 999,
                    }}
                >
                    <Image
                        source={icons.menu}
                        resizeMode="contain"
                        style={{
                            tintColor: COLORS.white,
                            height: 35,
                            width: 35,
                        }}
                    />
                </TouchableOpacity>
                {/* <View
                    style={{
                        height: 45,
                        width: "50%",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 999,
                        marginLeft:25
                    }}
                >
                    <Text style={{fontSize:20, fontWeight:"bold", color:COLORS.black}}>Diagui Shop</Text>
                </View> */}

                <View>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Favoris")}
                    style={{
                        height: 35,
                        width: 35,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 999,
                    }}
                >
                    <Image
                        source={icons.heart}
                        resizeMode="contain"
                        style={{
                            height: 24,
                            width: 24,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default DrawerContent;

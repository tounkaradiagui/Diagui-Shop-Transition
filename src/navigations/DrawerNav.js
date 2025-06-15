import { View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, images } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import Support from '../screens/Support';
import Address from '../screens/Address';
import Notifications from '../screens/Notifications';
import Favoris from '../screens/Favoris';
import Orders from '../screens/Orders';
import BottomTabs from './BottomTabs';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 300,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={images.avatar}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 999,
                  marginBottom: 12,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 6,
                  color: COLORS.white,
                }}
              >
                Diagui Tounkara
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: COLORS.white,
          width: 250,
        },
        headerStyle: {
          backgroundColor: COLORS.white,
        },
        headerShown: false,
        drawerLabelStyle: {
          color: COLORS.black,
          fontSize: 14,
        },
        hearderTinColor: COLORS.black,
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        options={{
          drawerLabel: "Accueil",
          title: "Accueil",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={BottomTabs}
      />

      <Drawer.Screen
        name="Orders"
        options={{
          drawerLabel: "Commande",
          title: "Commande",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="gift-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Orders}
      />
      <Drawer.Screen
        name="Favoris"
        options={{
          drawerLabel: "Favoris",
          title: "Favoris",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="heart-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Favoris}
      />

      <Drawer.Screen
        name="Notification"
        options={{
          drawerLabel: "Notification",
          title: "Notifications",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="notifications-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={Notifications}
      />
      <Drawer.Screen
        name="Address"
        options={{
          drawerLabel: "Adresse de livraison",
          title: "Adresse de livraisons",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="location-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Address}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Paramètre",
          title: "Paramètres",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="cog-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Settings}
      />
      <Drawer.Screen
        name="Support"
        options={{
          drawerLabel: "Aide",
          title: "Aide",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons
              name="help-circle-outline"
              size={24}
              color={COLORS.black}
            />
          ),
        }}
        component={Support}
      />

      {/* <Drawer.Screen
        // onPress={() => logout(navigation)}
        name="Logout"
        options={{
          drawerLabel: "Déconnexion",
          title: "Déconnexion",
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="log-out-outline" size={24} color={COLORS.black} />
          ),
        }}
        component={Login}
      /> */}
      
    </Drawer.Navigator>
  );
};

export default DrawerNav;

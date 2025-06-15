import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, Platform } from 'react-native'
import Home from '../screens/Home';
import { COLORS, icons } from '../constants';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: Platform.OS === "ios" ? 90 : 60,
          bottom: 50,
          left: 0,
          right: 0,
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? icons.home : icons.homeOutline}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? COLORS.primary : COLORS.black
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? icons.searchOutline : icons.search}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? COLORS.primary : COLORS.black
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? icons.cart : icons.cartOutline}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? COLORS.primary : COLORS.black
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Prodil"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={focused ? icons.user : icons.userOutline}
                resizeMode="contain"
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? COLORS.primary : COLORS.black
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabs
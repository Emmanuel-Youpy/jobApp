import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeStack/HomeScreen'
import JobDetails from '../screens/JobDetails'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/HomeStack/HomeStack';
import SettingsScreen from '../screens/SettingStack/SettingsScreen';
import SafeAreaViewAndriodIos from '../components/SafeAreaViewAndriodIos';
import HomeStack from '../screens/HomeStack/HomeStack';




const Tab = createBottomTabNavigator();


const MyTabs = () => {
  return (
    <SafeAreaView style={SafeAreaViewAndriodIos.AndroidSafeArea}>
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
    {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
    <Tab.Screen name="Home" component={HomeStack}  options={{headerShown:false}}/>
    
    {/* <Tab.Screen name="JobDetails" component={JobDetails} /> */}
    <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}} />
  </Tab.Navigator>
  </SafeAreaView>
  )
}

export default MyTabs


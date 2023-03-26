import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import JobDetails from '../screens/JobDetails'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator();


const MyTabs = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="JobDetails" component={JobDetails} />
  </Tab.Navigator>
  )
}

export default MyTabs
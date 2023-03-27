import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen'
import JobDetails from '../JobDetails'
import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import { icons, images } from '../../constants';

const Stack = createNativeStackNavigator();


const Home = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerTitle:"", headerLeft: ()=>{return<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>}, headerRight: ()=>{return<ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>}}}   />
    <Stack.Screen name="JobDetails" component={JobDetails} options={{headerShown:false}}/>
  </Stack.Navigator>
  )
}

export default Home
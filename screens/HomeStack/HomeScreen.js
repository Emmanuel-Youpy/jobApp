import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import Welcome from '../../components/home/welcome/Welcome'

const HomeScreen = ({navigation }) => {
  return (
    <View>
      <Welcome/>
      
    </View>
  )
}

export default HomeScreen
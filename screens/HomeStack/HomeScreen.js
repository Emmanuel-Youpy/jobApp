import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import Welcome from '../../components/home/welcome/Welcome'
import Popularjobs from '../../components/home/popular/Popularjobs'
import Nearbyjobs from '../../components/home/nearby/Nearbyjobs'

const HomeScreen = ({navigation }) => {
  return (
    <View style={{padding:10}}>
    <Welcome/>
      <Popularjobs/>
      <Nearbyjobs/>
    </View>
  )
}

export default HomeScreen
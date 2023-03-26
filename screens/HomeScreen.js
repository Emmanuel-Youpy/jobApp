import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const HomeScreen = ({navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('JobDetails')}
      />
    </View>
  )
}

export default HomeScreen
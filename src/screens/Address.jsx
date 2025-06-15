import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const Address = () => {
  return (
    <SafeAreaView  style={{
      flex: 1,
      backgroundColor: COLORS.white,
    }}>
      <Text>Address</Text>
    </SafeAreaView>
  )
}

export default Address
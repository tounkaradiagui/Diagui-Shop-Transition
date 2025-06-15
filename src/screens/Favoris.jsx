import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const Favoris = () => {
  return (
    <SafeAreaView  style={{
      flex: 1,
      backgroundColor: COLORS.white,
    }}>
      <Text>Fav</Text>
    </SafeAreaView>
  )
}

export default Favoris
import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'

const Orders = () => {
  return (
    <SafeAreaView  style={{
      flex: 1,
      backgroundColor: COLORS.white,
    }}>
      <Text>Commande</Text>
    </SafeAreaView>
  )
}

export default Orders
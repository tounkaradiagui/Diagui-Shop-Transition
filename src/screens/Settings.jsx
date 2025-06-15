import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'

const Settings = () => {
  return (
    <SafeAreaView  style={{
      flex: 1,
      backgroundColor: COLORS.white,
    }}>
      <Text>Setting</Text>
    </SafeAreaView>
  )
}

export default Settings
import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../constants'

const Search = () => {
  return (
    <SafeAreaView  style={{
      flex: 1,
      backgroundColor: COLORS.white,
    }}>
      <Text>Recherche</Text>
    </SafeAreaView>
  )
}

export default Search
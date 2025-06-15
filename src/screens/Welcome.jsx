import { Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


const Welcome = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>      
      <Text>Welcome</Text>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text style={{ fontSize: 18, color: 'blue', marginTop: 20 }}>Go to Home</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({})
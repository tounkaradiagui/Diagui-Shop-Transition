import { Button, Pressable, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '@/providers/AuthProvider';


const Welcome = () => {
  const navigation = useNavigation();

  const {isAuthenticated, signOut} = useAuth();

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>      
      <Text>Welcome</Text>
      <Text>{isAuthenticated ? "You are logged In" : "Not Authenticated"}</Text>
      <Button title="Log Out" onPress={() => signOut()}/>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={{ fontSize: 18, color: 'blue', marginTop: 20 }}>Go to Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Text style={{ fontSize: 18, color: 'blue', marginTop: 20 }}>Go to Home</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default Welcome

const styles = StyleSheet.create({})
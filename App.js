import { StatusBar } from 'expo-status-bar';
import AppNav from './src/navigations/AppNav';
import { AuthProvider } from './src/providers/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
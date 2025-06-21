import AppNav from './src/navigations/AppNav';
import { AuthProvider } from './src/providers/AuthProvider';
// import {tokenCache} from "@clerk/clerk-expo/token-cache"
// import { ClerkProvider } from '@clerk/clerk-expo';

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
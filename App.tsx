import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackRouter from './Routers/StackRouter';
// import InfoApp from 'screens/InfoApp';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <SafeAreaProvider>
      <StackRouter/>
      <StatusBar/>
    </SafeAreaProvider>
  );
}



import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View, Button } from 'react-native';
import InfoApp from './screens/InfoApp';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Annonce from './screens/Annonces';
// import InfoApp from 'screens/InfoApp';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown:false, }}>
          <Stack.Screen name='step1' component={Annonce} />
          <Stack.Screen name='step2' component={Screen2}/>
          <Stack.Screen name='step3' component={Screen3}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
const Screen1 = ({ navigation }) =>{
  return (<InfoApp  step={1}  onPress={()=> navigation.navigate('step2')} image={require('./assets/marker-yes.jpg')} title={'SOYEZ LES BIENVENUS'} describe={'Niosso, une plateforme en ligne sur laquelle les particuliers et les entreprises peuvent publier des annonces pour promouvoir leurs produits ou services.'}/>)
}
const Screen2 = ({ navigation }) =>{
  return (<InfoApp  step={2}  onPress={()=> navigation.navigate('step3')} image={require('./assets/yes.avif')} title={'TRES SIMPLE A UTILISER'} describe={'Niosso vous offre un parcours utilisateur très simple à utiliser et rapide, vous assurant aussi une sécurité totale de vos données.'}/>)
}
const Screen3 = ({ navigation }) =>{
  return (<InfoApp step={3} onPress={()=> navigation.navigate('step1')} image={require('./assets/fruit.avif')} title={'ACHETER ET VENDER !!!'} describe={"Achetez et vendez tout, des voitures d'occasion aux téléphones portables et aux ordinateurs, ou recherchez une propriété, un emploi et plus encore."}/>)
}


import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Annonce from '../../screens/Annonce'
import Favory from '../../screens/Favory'
import Help from '../../screens/Help'
import AskMarker from '../../screens/AskMarker'
import BottomBar from '../../components/BottomBar'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Compte from '../../screens/Compte'

const Tab =createBottomTabNavigator()
const Stack =createNativeStackNavigator()
const TabRouter = () => {
  return (
    <Tab.Navigator  tabBar={(props) => <BottomBar {...props} />}>
        <Tab.Screen options={{ headerShown:false, }} name='Annonce' component={Annonce}/>
        <Tab.Screen name='Favory'  component={Favory}/>
        {/* <Stack.Screen name='Publier' component={AskMarker}/> */}
        <Tab.Screen name='Compte' component={Compte}/>
        <Tab.Screen name='Help' component={Help}/>
    </Tab.Navigator>
  )
}

export default TabRouter
import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabRouter from '../../Routers/TabRouter';
import About from '../../screens/About';
import { NavigationContainer } from '@react-navigation/native';
import AskMarker from '../../screens/AskMarker';
import Detail from '../../screens/Detail';

const Stack = createNativeStackNavigator();
const StackRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false, }}>
                <Stack.Screen component={About} name='abouting' />
                <Stack.Screen options={{ headerShown: true, }} name='Publier' component={AskMarker} />
                <Stack.Screen component={TabRouter} name='tab' />
                <Stack.Screen component={Detail} name='detail' />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackRouter
import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Favory = () => {
    return (
        <View style={{ padding: 20, flex: 1, alignItems: 'center',rowGap:50 }}>
            <Text>Ajouter des annonce Favorites</Text>
            <Ionicons name='bandage' size={200} color={'#aabee2'} />
            <Pressable style={{ width: '80%', marginHorizontal: '10%', padding: 10, alignItems: 'center', borderColor: '#a6bce1', borderWidth: 2, borderRadius: 5 }}>
                <Text style={{ color: '#5a84cf' }}>Rechercher</Text>
            </Pressable>
        </View>
    )
}

export default Favory
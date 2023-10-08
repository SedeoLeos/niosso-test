import { View, Text, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Favory = () => {
    return (
        <View style={{ padding: 20, flex: 1, alignItems: 'center',rowGap:50 }}>
            <Text>Ajouter des annonce Favorites</Text>
            <MaterialCommunityIcons name='book-cancel-outline' size={200} color={'#aabee2'} />
            <TouchableOpacity style={{ width: '80%', marginHorizontal: '10%', padding: 10, alignItems: 'center', borderColor: '#0044BB', borderWidth: 1, borderRadius: 5 }}>
                <Text style={{ color: '#0044BB' }}>Rechercher</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Favory
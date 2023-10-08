import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './style';
const ItemTabBottom = ({ navigation, tab, state, index }) => {
    const indexQ = state.index < 2 ? state.index :state.index+1
    return (
        <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(tab.route)}
            style={[styles.button, { backgroundColor: tab.bg&&tab.bg }]}
        >
            <Ionicons
                name={tab.icon}
                size={24}
                color={tab.bg !=='transparent'? 'white' : indexQ === index  ? '#0044BB': 'black'}
            />
            <Text style={[styles.text, { color: tab.bg !=='transparent'?'white' : indexQ === index ? '#0044BB' : '#000' }]}>{tab.name}</Text>
        </TouchableOpacity>
    )
}

export default ItemTabBottom
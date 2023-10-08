import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { styles } from './style'

const HelpItem = ({ item, isOther }) => {
    return (
        <TouchableOpacity style={[styles.contenaire, {
            backgroundColor: isOther ? '#fff' : item.color ? item.color : '#fff',
            borderColor: isOther ? '#0044BB50' : item.color ? 'transparent' : 'rgba(0, 0, 0, 0.15)',
            marginTop: isOther && 50,
            marginHorizontal: isOther ? 50 : 20
        }]}>
            <View style={ styles.viewWrappe }>
                {!isOther && <Ionicons name={item.icon} color={item.color && '#fff'} />}

                <Text style={{ color: isOther ? '#0044BB' : item.color && '#fff' }}>{item.name}</Text>
            </View>
            <Ionicons name={!isOther ? 'chevron-forward' : 'arrow-forward-outline'} color={isOther ? '#0044BB' : item.color && '#fff'} />
        </TouchableOpacity>)
}



export default HelpItem
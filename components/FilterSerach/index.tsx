import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from '@expo/vector-icons/Ionicons';

const FIlterSearch = () => {
    return (
        <View style={styles.searchContainer}>
            <View style={styles.inputContainer}>
                <Ionicons name="search" size={20} color="#333" style={styles.searchIcon} />
                <TextInput
                    autoFocus={false}
                    style={styles.input}
                    placeholder="Taper ici pour chercher"
                />
            </View>
            <Pressable style={styles.locationButton}>
                <Ionicons name="location" size={20} color="#0044BB" style={styles.searchIcon} />
                <Text>Tout Congo</Text>
            </Pressable>
        </View>
    )
}

export default FIlterSearch
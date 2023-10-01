import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from './style';

const ButtonNexted = (props:{onPress?:any}) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.contenaire}>
      <Text style={styles.text}>Suivant</Text>
      <Ionicons name='ios-arrow-forward' style={{ color:'#0044BB' }} size={30} />
    </TouchableOpacity>
  )
}

export default ButtonNexted
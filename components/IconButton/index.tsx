import { Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
class IconButtonProps {
    name?:any='options'
}

const IconButton = (data:IconButtonProps) => {
    const {name}=data;

  return (
    <Pressable>
               <Ionicons name={name} size={25} color="#0044BB"/>
    </Pressable>
  )
}

export default IconButton
import { TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Following = () => {
  const [loved, setLoved] = useState(false)
  const handelPress = () => {
    setLoved(!loved);
  }
  return (
    <TouchableOpacity style={{ padding: 5, borderRadius: 25, backgroundColor: loved ? 'red' : 'white' }} onPress={handelPress}>
      <Ionicons size={25} name={'heart-outline'} color={loved ? 'white' : 'black'} />
    </TouchableOpacity>
  )
}
export default Following
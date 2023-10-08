import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import  Ionicons  from '@expo/vector-icons/Ionicons';
import HelpItem from '../../components/HelpItem';
const data = [
  {
    icon:'alert-circle-outline',
    name:'A propos'
  },
  {
    icon:'help-outline',
    name:'FAQs'
  },
  {
    icon:'call',
    name:'Contactez-nous'
  },
  {
    icon:'receipt-outline',
    name:'Règles de publications'
  },
  {
    icon:'receipt-outline',
    name:'Mentions légales'
  },
  {
    icon:'receipt-outline',
    name:'CGV'
  },
  {
    icon:'receipt-outline',
    name:'CGU'
  },
  {
    icon:'arrow-redo',
    name:'Partager l’application à un(e) ami(e)',
    color:'rgba(0, 68, 187, 0.8)'
  },
  {
    icon:'none',
    name:'Contacter le service client',
    color:'rgba(0, 68, 187, 0.8)'  
  }
]
const Help = () => {
  return (
    <View  style={{ rowGap:10,paddingVertical:30 }}>
      {data.map((item,index)=>index !== data.length -1 && <HelpItem item={item} isOther={false}/>)}
      <HelpItem item={data[data.length-1]} isOther/>
    </View>
  )
}

export default Help

import { View, Text } from 'react-native'
import React from 'react'
import  Ionicons  from '@expo/vector-icons/Ionicons'

export class BadgeProps {
    text?:string;
    icon?:any;
    iconSize?:number=25
    color:string
    backgroundColor?:string
    textSize?:number
}
const Badge = (data: BadgeProps) => {
    const {text,icon,iconSize,color,backgroundColor,textSize } = data;
    console.log(iconSize,icon)
  return (
    <View style={{alignItems:'center',justifyContent:'center',flexDirection:'row', padding: 5,columnGap:5, backgroundColor:backgroundColor , borderRadius: 30 }}>
        {icon ? <Ionicons name={icon} style={[{color:color}]} size={iconSize} />:null}
        {text ?<Text style={[{color:color,fontSize:textSize},]} >{text}</Text>:null}
    </View>
  )
}

export default Badge
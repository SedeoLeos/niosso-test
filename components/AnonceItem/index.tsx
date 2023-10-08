import { View, Text, ImageBackground, ImageSourcePropType, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Badge from '../Badge';
import Following from '../../components/Following/intex';
import { useNavigation } from '@react-navigation/native';
export class AnnonceItemProps {
    image?: ImageSourcePropType;
    amount?: string;
    title?: string;
    devise: string = 'FCFA'
    time: string;
    location?: string;
    isVedete: boolean = false;
    width:any;
}

const AnnonceItem = (data: AnnonceItemProps) => {
    const { image, amount, title, devise, time, location, isVedete,width } = data;
    const justifyContent = isVedete===true ? 'space-between' : 'flex-end';
    let height :any='auto';
    if(width!== '100%'){
        height=250;
    }
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={()=>{
            navigation?.getParent().navigate('detail')
        }} style={[styles.contenaire,{width:width,height:height},]} >
            <ImageBackground style={[styles.image]} source={data.image}>
                <View style={[styles.topView, { justifyContent }]}>
                    {isVedete ? <Badge color={'#fff'} backgroundColor='rgba(0, 68, 187, 1)' text='Annonce en vedette' />:null}
                    <Following />
                </View>
                <View style={styles.bottomView}>
                    <Badge color={'#fff'} textSize={12} iconSize={14} backgroundColor='rgba(0, 0, 0, 0.4)' icon='time-outline' text={time} />
                    <Badge color={'#fff'} textSize={12} iconSize={14} backgroundColor='rgba(0, 0, 0, 0.4)' icon='location-outline' text={location} />
                </View>
            </ImageBackground>
            <View style={styles.moreItem}>
                <Text style={styles.textTitle}>{amount} {devise}</Text>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AnnonceItem
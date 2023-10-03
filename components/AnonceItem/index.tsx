import { View, Text, ImageBackground, ImageSourcePropType, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import Badge from '../Badge';
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
    console.log(width)
    let height :any='auto';
    if(width!== '100%'){
        height=250;
    }
    return (
        <Pressable  style={[styles.contenaire,{width:width,height:height},]} >
            <ImageBackground style={[styles.image]} source={require('../../assets/marker-yes.jpg')}>
                <View style={[styles.topView, { justifyContent }]}>
                    {isVedete ? <Badge color={'#fff'} backgroundColor='rgba(0, 68, 187, 1)' text='Annonce en vedette' />:null}
                    <Badge color={'#000'} backgroundColor='#fff' icon='heart-outline' iconSize={25} />
                </View>
                <View style={styles.bottomView}>
                    <Badge color={'#fff'} backgroundColor='rgba(0, 0, 0, 0.4)' icon='time-outline' text={time} />
                    <Badge color={'#fff'} backgroundColor='rgba(0, 0, 0, 0.4)' icon='location-outline' text={location} />
                </View>
            </ImageBackground>
            <View style={styles.moreItem}>
                <Text>{amount} {devise}</Text>
                <Text>{title}</Text>
            </View>
        </Pressable>
    )
}

export default AnnonceItem
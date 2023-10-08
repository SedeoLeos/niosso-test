import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemDetailSilder from '../../components/ItemDetailSilder'
import Badge from '../../components/Badge';

const Detail = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <ItemDetailSilder  onPress={()=>navigation.goBack()}/>
            <View>
                <View>
                    <Text>Iphone 14 neu à vendre à bon prix</Text>
                    <Text>120 000 CFA</Text>
                </View>
                <View>
                    <Badge backgroundColor='transparent' color='gray' icon={'wattsapp'} text={'Envoyer un message au vendeur'} />
                    <View style={{ flexDirection: 'row', justifyContent: 'center', columnGap: 10 }}>
                        <TextInput />
                        <Button title='Envoyer' />
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row',justifyContent:'space-around' }}>
                <BagdeIcon title={'Partager'}>
                    <Badge backgroundColor='black' color='#fff' iconSize={30} icon={'arrow-redo-outline'}  />
                </BagdeIcon>
                <BagdeIcon title={'J’aime'}>
                    <Badge backgroundColor='#0044BB' color='#fff' iconSize={30} icon={'heart-outline'}  />
                </BagdeIcon>
                <BagdeIcon title={'Modifier'}>
                    <Badge backgroundColor='#fff' color='#0044BB' iconSize={30} icon={'create-outline'}  />
                </BagdeIcon>
                <BagdeIcon title={'Boutique'}>
                    <Badge backgroundColor='#007BFF' color='#fff' iconSize={30} icon={'cart-outline'}  />
                </BagdeIcon>
                <BagdeIcon title={'Supprimer'}>
                    <Badge backgroundColor='#A80A0A' color='#fff' iconSize={30} icon={'trash-outline'}  />
                </BagdeIcon>
            </View>
            <View>
                <Text>Description</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt maiores, asperiores eveniet nobis in incidunt blanditiis atque cupiditate laboriosam corporis, non nihil temporibus voluptate repellendus dicta at inventore fugit?</Text>
            </View>
        </View>
    )
}

export default Detail
const BagdeIcon = ({children,title}) => {
    return ( <TouchableOpacity style={{ justifyContent:'center' }}>
        { children }
        <Text>{title}</Text>
    </TouchableOpacity>)
}
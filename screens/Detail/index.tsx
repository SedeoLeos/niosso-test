import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import ItemDetailSilder from '../../components/ItemDetailSilder'
import Badge from '../../components/Badge';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Detail = () => {
    return (
        <View style={{ flex: 1}}>
            <ItemDetailSilder />
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
            <View style={{ flexDirection: 'row' }}>
                <Badge backgroundColor='transparent' color='gray' icon={'options'} text={'Envoyer'} />
                <Badge backgroundColor='transparent' color='gray' icon={'options'} text={'Envoyer'} />
                <Badge backgroundColor='transparent' color='gray' icon={'options'} text={'Envoyer'} />
                <Badge backgroundColor='transparent' color='gray' icon={'options'} text={'Envoyer'} />
            </View>
            <View>
                <Text>Description</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sunt maiores, asperiores eveniet nobis in incidunt blanditiis atque cupiditate laboriosam corporis, non nihil temporibus voluptate repellendus dicta at inventore fugit?</Text>
            </View>
        </View>
    )
}

export default Detail
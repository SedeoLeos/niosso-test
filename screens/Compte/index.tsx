import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import AnnonceItem from '../../components/AnonceItem'
import { AnnonceData } from '../../screens/Annonce/data'
import HelpItem from '../../components/HelpItem'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
const Compte = ({ navigation }) => {
    const inset = useSafeAreaInsets()
    useLayoutEffect(() => {
        navigation.setOptions({
            // Utilisation d'un composant personnalisé en tant que header
            header: () => <CustomHeader />,
            // Personnalisation du style du header
            headerStyle: {
                height: 150, // Hauteur personnalisée pour l'en-tête
                backgroundColor: '#FFF', // Couleur de fond du header
            },
            headerTitle: '', // Titre vide pour masquer le titre par défaut
        });
    }, [navigation]);
    const item = {
        icon: 'storefront',
        name: 'Ma boutique'
    }
    return (
        <View style={{ paddingBottom:inset.bottom }}>

            <HelpItem item={item} isOther={false} />
            <Text style={{ padding: 20 }}>Mes annones</Text>
            <MyAnnonce />
        </View>
    )
}

export default Compte

const MyAnnonce = () => {

    return (<ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between', rowGap: 10, columnGap: 5, padding: '2%',paddingBottom:100 }}>
            {AnnonceData.map((data,index) => (
                <AnnonceItem isVedete={false} image={data.image} title={data.title} location='Brazzaville' amount={data.amount} width={'49%'} devise={'FCFA'} time={'3 minutes'} />
            ))}
        </View>
    </ScrollView>)
}
const CustomHeader = () => {
    const inset = useSafeAreaInsets()
    return (
        <View style={{ paddingTop: inset.top,backgroundColor: '#fff',marginBottom:20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign:'center' }}>Mon compte</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center',paddingHorizontal:10 }}>
                    <TouchableOpacity style={{ backgroundColor: '#0044BB', borderRadius: 5, padding: 5 }}>
                        <Ionicons name='settings-outline' color={'#fff'} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, marginBottom: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 20 }}>
                    <View style={{ backgroundColor: '#D9D9D9', borderRadius: 50, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons size={50} name='person' />
                    </View>
                    <View>
                        <Text>Nom et prénom</Text>
                        <Text>06 53 58 74 2</Text>
                        <Text>Inscrit il y a 3 mois</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={{ borderColor: '#0044BB', borderWidth: 1, borderRadius: 5, padding: 5 }}>
                        <Text style={{ color: '#0044BB' }}>Modifier</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
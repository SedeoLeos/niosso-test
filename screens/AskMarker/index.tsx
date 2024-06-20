import { View, Text, Button, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const AskMarker = ({navigation}) => {
  const inset = useSafeAreaInsets()
  navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Que vous voulez vendre ?', // Titre du header
      headerStyle: {
        padding:30,
        backgroundColor: '#fff', // Couleur d'arrière-plan du header
      },
      headerTintColor: '#000000BF', // Couleur du texte du header
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <TouchableOpacity style={{ backgroundColor:'#0044BB',padding:5,borderRadius:100,shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: {
          width: 0,
          height: 4,
        }, // Décalage de l'ombre (x, y)
        shadowOpacity: 0.4, // Opacité de l'ombre (0.0 - 1.0)
        shadowRadius: 4,  }} onPress={handBack}>
            <Ionicons name='arrow-back'  color={'#fff'} size={20}/>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ backgroundColor:'#0044BB',padding:5,borderRadius:100,shadowColor: '#000', // Couleur de l'ombre
        shadowOffset: {
          width: 0,
          height: 4,
        }, // Décalage de l'ombre (x, y)
        shadowOpacity: 0.4, // Opacité de l'ombre (0.0 - 1.0)
        shadowRadius: 4,  }}>
            <Ionicons name='help-circle-outline' color={'#fff'} size={20}/>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const handBack = () =>{
    navigation.goBack();
  }
  return (
    <View style={{ flex: 1, paddingBottom: inset.bottom }}>
      <FlatList
        numColumns={3}
        snapToAlignment='center'
        scrollToOverflowEnabled={false}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        // pagingEnabled
        data={['1', '2', '3', '5', '4', '0', '9', '10', '11', '12', '13', '15']}
        keyExtractor={(item) => item}
        style={{ flex: 1, alignContent: 'center', paddingVertical: 25, paddingHorizontal: 10 }}
        renderItem={() => (
          <TouchableOpacity style={{ width: '30%', backgroundColor: '#fff', borderColor: '#0044BB26', borderWidth: 1, paddingVertical: 15, paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center', margin: 5,shadowColor:"#007BFF33",shadowOffset:{width:0,height:0}, shadowOpacity: 0.33,
          shadowRadius: 4, }}>
            <Image style={{ height: 70, width: 70 }} height={100} source={require('../../assets/categorie/vetements-de-bebe.png')} />
            <Text style={{ alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>vetements de bebe</Text>
          </TouchableOpacity>)}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
        <View style={{ width: 50,height:50, flexDirection: 'column', alignContent: 'center', justifyContent: 'center', rowGap: 5, }}>
          <TouchableOpacity style={{backgroundColor: '#D9D9D980',justifyContent: 'center',alignItems:'center',borderRadius:25,padding:10}}  onPress={handBack}>
            <Ionicons name='arrow-back-outline' size={20} />
          </TouchableOpacity>
          <Text style={{ fontSize:6,alignItems:'center',textAlign:'center' }}>Retour</Text>
        </View>

      </View>
    </View>
  )
}

export default AskMarker

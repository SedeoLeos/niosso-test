import React from 'react';
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ItemTabBottom from '../../components/ItemTabBottom';
const tabs = [
    {
      name: 'Annonce',
      icon: 'home-outline',
      route: 'Annonce',
      bg:'transparent'
    },
    {
      name: 'Favoris',
      icon: 'heart-outline',
      route: 'Favory',
      bg:'transparent'
    },
    {
      name: 'Publier',
      icon: 'camera-outline',
      route: 'Publier',
      bg:'#0044BB'
    },
    {
      name: 'Compte',
      icon: 'person-outline',
      route: 'Compte',
      bg:'transparent'
      
    },
    {
      name: 'Aide',
      icon: 'help-circle-outline',
      route: 'Help',
      bg:'transparent'
    },
  ];
  
const BottomBar = ({ navigation, state }) => {
    const inset = useSafeAreaInsets()
  return (
    <View style={[styles.container,{paddingBottom: inset.bottom} ]}>
      {tabs.map((tab, index) => (
        <ItemTabBottom tab={tab} index={index} state={state} navigation={navigation}/>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    height: 90,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomBar;

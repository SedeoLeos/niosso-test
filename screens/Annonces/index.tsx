import { Text, StyleSheet, View,TextInput,TouchableOpacity,Image, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import categoriesData from './cathegorie';
import AnnonceData from './annonce';

const Annonce = ()=>{
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
     <SafeAreaView style={{ flex:1,backgroundColor:'rgba(255, 255, 255, 0.95)' }}>
       <View style={styles.headerTop}>
           <View style={styles.searchContainer}>
               <View style={styles.inputContainer}>
                   <Ionicons name="search" size={20} color="#333" style={styles.searchIcon} />
                   <TextInput
                   style={styles.input}
                   placeholder="Taper ici pour chercher"
                   />
               </View>
               <TouchableOpacity style={styles.locationButton}>
                   <Ionicons name="location" size={20} color="#0044BB" style={styles.searchIcon} />
                   <Text>Tout Congo</Text>
               </TouchableOpacity> 
           </View>
           <TouchableOpacity>
               <Ionicons name="options" size={25} color="#0044BB" style={styles.searchIcon} />
           </TouchableOpacity>
       </View>
       <View style={styles.bottomHeader}>
           <Text style={styles.bottomHederTitle}>Catégories</Text>
           <FlatList data={categoriesData} renderItem={(data)=>(<TouchableOpacity style={styles.catherogierItem} >
               <View style={styles.catherogierContenaireImage}>
                   <Image style={styles.catherogierItemImage}source={data.item.image}/>
               </View>
               <Text style={styles.catherogierItemTest}>{data.item.category}</Text>
           </TouchableOpacity>)}  showsHorizontalScrollIndicator={false} horizontal={true}/>
       </View>
       <ScrollView showsVerticalScrollIndicator={false}>
       <FlatList style={{ flex:1, }} data={AnnonceData} renderItem={(data)=>data.item.isVedette ?(
       <TouchableOpacity style={{margin:20,height:230,width:374,backgroundColor:'#fff',borderRadius:5,elevation:5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4, }} >
   <ImageBackground style={{flex:5,overflow:'hidden',borderTopRightRadius:5,borderTopLeftRadius:5,justifyContent:'space-between',padding:2}} source={data.item.image}>
                   <View style={{ flexDirection:'row',padding:10,justifyContent:'space-between',alignItems:'center' }}>
                       <View style={{ padding:5,backgroundColor:'rgba(0, 68, 187, 1)',borderRadius:15, }}><Text style={{ color:'#fff',fontSize:11 }}>Annonce en vedette</Text></View>
                       <View style={{ padding:5,backgroundColor:'#fff',borderRadius:30 }}><Ionicons name='heart-outline' size={25}/></View>
                   </View>
                   <View  style={{flexDirection:'column',padding:10,rowGap:10 }}>
                       <View style={{ padding:5,backgroundColor:'rgba(0, 0, 0, 0.4)',borderRadius:15,flexDirection:'row',columnGap:2,width:100,alignItems:'center',justifyContent:'center'  }}><Ionicons name='time-outline' color={'#fff'}/><Text style={{ color:'#fff' }}>3 minutes</Text></View>
                       <View style={{ padding:5,backgroundColor:'rgba(0, 0, 0, 0.4)',borderRadius:15,flexDirection:'row',columnGap :2,width:100,alignItems:'center',justifyContent:'center'  }}><Ionicons name='location-outline' color={'#fff'}/><Text style={{ color:'#fff' }}>Vedette</Text></View>
                   </View>
           </ImageBackground>
           <View  style={{flex:1,padding:10}}>
               <Text>{data.item.amount}</Text>
               <Text>{data.item.title}</Text>
           </View>
           </TouchableOpacity>):null}  showsHorizontalScrollIndicator={false} horizontal={true}/>
           <View style={{flex:1,flexWrap:'wrap',flexDirection:'row',justifyContent:'space-evenly',rowGap:15,columnGap:5}}>
           {AnnonceData.map((data)=>(<ItemOpacity data={data} />))}

           </View>
       </ScrollView>

     </SafeAreaView>
   );
}
export default Annonce;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 
const ItemOpacity = ({data})=>{
    return (<TouchableOpacity style={{height:230,width:(windowWidth/2)-20,backgroundColor:'#fff',borderRadius:5,elevation:5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4, }} >
           <ImageBackground style={{flex:5,overflow:'hidden',borderTopRightRadius:5,borderTopLeftRadius:5,justifyContent:'space-between',padding:2}} source={data.image}>
                   <View style={{ flexDirection:'row',padding:10,justifyContent:'space-between',alignItems:'center' }}>
                       <View style={{ padding:5,backgroundColor:'rgba(0, 68, 187, 1)',borderRadius:15, }}><Text style={{ color:'#fff',fontSize:11 }}>Annonce en vedette</Text></View>
                       <View style={{ padding:5,backgroundColor:'#fff',borderRadius:30 }}><Ionicons name='heart-outline' size={25}/></View>
                   </View>
                   <View  style={{flexDirection:'column',padding:10,rowGap:10 }}>
                       <View style={{ padding:5,backgroundColor:'rgba(0, 0, 0, 0.4)',borderRadius:15,flexDirection:'row',columnGap:2,width:100,alignItems:'center',justifyContent:'center'  }}><Ionicons name='time-outline' color={'#fff'}/><Text style={{ color:'#fff' }}>3 minutes</Text></View>
                       <View style={{ padding:5,backgroundColor:'rgba(0, 0, 0, 0.4)',borderRadius:15,flexDirection:'row',columnGap :2,width:100,alignItems:'center',justifyContent:'center'  }}><Ionicons name='location-outline' color={'#fff'}/><Text style={{ color:'#fff' }}>Vedette</Text></View>
                   </View>
           </ImageBackground>
           <View  style={{flex:1,padding:10}}>
               <Text>{data.amount}</Text>
               <Text>{data.title}</Text>
           </View>
           </TouchableOpacity>);
}
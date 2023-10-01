import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ImageBackground, Text, View, ImageSourcePropType, GestureResponderEvent } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import ButtonNexted from '../../components/ButtonNext';
import IndicatorCircle from '../../components/IndicatorCircle';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
const InfoApp =(props:{image:ImageSourcePropType,title:string,describe:string,step:number,onPress?:(event: GestureResponderEvent) => void},) => {
    const {image,title,describe,step,onPress} =props;
  const inset = useSafeAreaInsets()
  return (
    <View style={[styles.container,{
       }]}>

      <ImageBackground source={image} style={styles.image}/>
      <LinearGradient style={{position:'absolute',bottom:'30%',height:'50%',width:'100%'}} 
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 68, 187, 0.9)' , 'rgba(0, 68, 187, 1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        />
      <View style={styles.blue}>
                <IndicatorCircle step={step}/>
                <View>
                    <Text style={{fontSize:24,fontWeight:'500',marginBottom:10,...styles.test}}>{title}</Text>
                    <Text style={{fontSize:19,marginBottom:40,...styles.test}}>{describe}</Text>
                    <ButtonNexted onPress={onPress}/>
                </View>     
        </View>
    </View>
  );
}

export default  InfoApp;

const styles = StyleSheet.create({
  container: {
    
    position:'relative',
    flex: 1,
  },
  
  image: {
    flex: 1,
    objectFit:'cover',
    resizeMode: 'cover', 
    justifyContent: 'flex-end',
  },
  test: {
    // fontFamily:'inter',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center'
  },
  header:{
    // backgroundColor:'red',
    rowGap:15,
    // justifyContent:'space-evenly',
    paddingHorizontal:10,
    margin:10,
  },
  blue:{
    backgroundColor:'#0044BB',
    flex:1,
    padding:10,
    paddingTop:0,
  }

});

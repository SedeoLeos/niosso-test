import { Text,  View, FlatList, ScrollView, Dimensions } from 'react-native'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context';
import FIlterSearch from '../../components/FilterSerach';
import IconButton from '../../components/IconButton';
import ImageButtonText from '../../components/ImageButtton';
import AnnonceItem from '../../components/AnonceItem';
import { AnnonceData, categoriesData } from './data';


const Annonce = () => {
  return (
   <SafeAreaView style={{ flex:1,backgroundColor:'rgba(255, 255, 255, 0.95)' }}>
     <View style={styles.headerTop}>
         <FIlterSearch/>
         <IconButton name={'options'}/>
     </View>
     <View style={styles.bottomHeader}>
         <Text style={styles.bottomHederTitle}>Catégories</Text>
         <FlatList data={categoriesData} renderItem={(data)=>(<ImageButtonText image={data.item.image} text={data.item.category}/>)}  showsHorizontalScrollIndicator={false} horizontal={true}/>
     </View>
     <ScrollView showsVerticalScrollIndicator={false}>       
      <View style={{flexWrap:'wrap',flexDirection:'row',justifyContent:'space-between',rowGap:10,columnGap:5,padding:'2%'}}>
         {AnnonceData.map((data)=>(
          <AnnonceItem isVedete={data.isVedette} image={data.image} title={data.title} location='Brazzaville' amount={data.amount} width={data.isVedette ? '100%' : '49%' } devise={'FCFA'} time={'3 minutes'} />
        ))}
      </View>
     </ScrollView>

   </SafeAreaView>
 );
}

export default Annonce

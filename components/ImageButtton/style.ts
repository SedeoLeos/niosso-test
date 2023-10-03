import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    catherogierItem:{
        alignItems:'center',
        marginLeft:5,
        width:70,
        rowGap:5,
    },
    catherogierContenaireImage:{
        width:35,
        height:35,
        padding:5,
        alignContent:'center',
        alignItems:'center',
        backgroundColor:"#D9D9D9",
        borderRadius:40

    },
    catherogierItemImage:{
        width:25,
        height:25,

        // objectFit:"cover",
    },
    catherogierItemTest:{
        color:'rgba(0, 0, 0, 1)',
        textAlign:'center',
        fontSize:9,
        // width:60,
        // flex:1,
        // flexWrap:'wrap',
    }
})
export default styles;
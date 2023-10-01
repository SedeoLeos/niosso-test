import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    headerTop:{
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection:'row',  
        paddingHorizontal:10,
        height:50,

    },
    searchContainer:{
        
        height:43,
        paddingHorizontal:10,
        maxWidth:335,
        backgroundColor:'#dbe2ee',
        borderColor:"#0044BB4D",
        borderRadius:5,
        flex:1,
        justifyContent: 'space-between',
        flexDirection:'row',
        

    },
    inputContainer:{
        flexDirection:'row',
        alignItems:'center'
    
    },
    searchIcon:{
        padding:3,
    },
    input:{

    },
    locationButton:{
        borderLeftColor:'#0044BB4D',
        borderLeftWidth:1,
        flexDirection:'row',
        alignItems:'center',
    },
    bottomHeader:{
        rowGap:5,
        marginTop:5,
    },
    bottomHederTitle:{
        marginHorizontal:10
    },
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
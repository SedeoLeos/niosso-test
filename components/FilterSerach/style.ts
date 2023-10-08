import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchContainer:{
        
        height:43,
        paddingHorizontal:10,
        backgroundColor:'#0044BB1A',
        borderColor:"#0044BB4D",
        borderWidth:1,
        borderRadius:5,
        flex:1,
        flexDirection:'row',
        marginRight:10
    },
    inputContainer:{
        flex:3,
        flexDirection:'row',
        alignItems:'center',
    },
    searchIcon:{
        padding:3,
    },
    input:{
        height:'100%',
        flexGrow:1,
        borderWidth:0,
        flex:1,
        
    },
    locationButton:{
        borderLeftColor:"#0044BB4D",
        borderLeftWidth:1,
        flexDirection:'row',
        alignItems:'center',
    },
})
export default styles;
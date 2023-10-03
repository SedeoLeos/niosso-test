import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchContainer:{
        
        height:43,
        paddingHorizontal:10,
        backgroundColor:'#dbe2ee',
        borderColor:"#dfe7f6",
        borderRadius:5,
        flex:1,
        // justifyContent: 'space-between',
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
        borderLeftColor:'#dfe7f6',
        borderLeftWidth:1,
        flexDirection:'row',
        alignItems:'center',
    },
})
export default styles;
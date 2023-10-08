import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contenaire:{
        // margin:20,
        backgroundColor: '#fff',
        borderRadius: 5, 
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    image:{
        flex: 5,
        overflow: 'hidden',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        justifyContent: 'space-between',
        padding: 2 
    },
    topView :{
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    bottomView:{
        flexDirection: 'column',
        padding: 10, 
        rowGap: 10,
        flexGrow:0,
        flexShrink:1,
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    moreItem:{
        flex: 1, 
        padding: 10
    },
    textTitle:{
        fontWeight:'600',
        color:'rgba(0, 0, 0, 0.9)',
        fontSize:22,
    },
    textDescrible:{
        color:'#666666',
        fontWeight:'500',
        fontSize:15
    }
})
export default styles;
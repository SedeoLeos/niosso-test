import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contenaire:{
        // margin:20,
        backgroundColor: '#fff',
        borderRadius: 5, 
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
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
    }
})
export default styles;
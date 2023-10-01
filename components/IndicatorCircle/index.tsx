import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IndicatorCircle = ({ step }) => {
    return (

        step === 1 ?
            <View style={styles.contenaire}>
                <View style={styles.stepMax}></View>
                <View style={styles.step}></View>
                <View style={styles.step}></View>
            </View > : step === 2 ? <View style={styles.contenaire}>
                <View style={styles.step}></View>
                <View style={styles.stepMax}></View>
                <View style={styles.step}></View>
            </View> : <View style={styles.contenaire}>
                <View style={styles.step}></View>
                <View style={styles.step}></View>
                <View style={styles.stepMax}></View>
            </View>


    )
}

export default IndicatorCircle

const styles = StyleSheet.create({
    contenaire:{
        justifyContent:'center',
        padding:5,
       marginVertical:10,
        marginHorizontal:10,
        flexDirection:'row',
        columnGap:10,
    },
    step:{
        width: 8,
        height:8,
        backgroundColor:'transparent',
        borderWidth:1,
        borderColor:'#FFFFFF',
        borderRadius:8
    },
    stepMax:{
        width: 48,
        height:8,
        backgroundColor:'#FFFFFF',
        borderRadius:10,

    }
})
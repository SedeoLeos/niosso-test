import { Animated, Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'

const { width } =Dimensions.get('screen');
const IndicatorCircle = ({ data,scrollX, index }) => {
    return (

        <View style={styles.contenaire}>
            {data.map((data: any,idx: number) => {
                const inputRange = [(idx -1) * width,idx * width,(idx + 1) * width ]
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange:[8,48,8],
                    extrapolate:'clamp'
                })
                const dotbg = scrollX.interpolate({
                    inputRange,
                    outputRange:['transparent','#FFFFFF','transparent'],
                    extrapolate:'clamp'
                })
                return (<Animated.View key={idx.toString()} style={[styles.step,{width:dotWidth,backgroundColor:dotbg},]}/>)
            })}
        </View>
        // step === 1 ?
        //     <View style={styles.contenaire}>
        //         <View style={styles.stepMax}></View>
        //         <View style={styles.step}></View>
        //         <View style={styles.step}></View>
        //     </View > : step === 2 ? <View style={styles.contenaire}>
        //         <View style={styles.step}></View>
        //         <View style={styles.stepMax}></View>
        //         <View style={styles.step}></View>
        //     </View> : <View style={styles.contenaire}>
        //         <View style={styles.step}></View>
        //         <View style={styles.step}></View>
        //         <View style={styles.stepMax}></View>
        //     </View>


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
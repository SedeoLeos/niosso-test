import { View, Text, FlatList, Image, useWindowDimensions, TouchableOpacity, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import Badge from '../Badge'
import { data } from './data'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const ItemDetailSilder = ({onPress}) => {
    const {width} = useWindowDimensions();
    const inset =useSafeAreaInsets()
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const handleOnScroll = event => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX,
                    },
                },
            },
        ],
            {
                useNativeDriver: false,
            },)(event);
    };
    {
        Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
        )
    }
    const handleOnViewbleItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;
    const viewabilityConfig = useRef({
        itemVisiblePrecentThreshold: 50,
    })
    return (
        <View style={{ position: 'relative' ,justifyContent: 'space-between', padding: 10,width,height:500,paddingTop:inset.top}}>
            <FlatList
                horizontal
                snapToAlignment='center'
                bounces={false}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                onViewableItemsChanged={handleOnViewbleItemsChanged}
                scrollEventThrottle={50}
                initialScrollIndex={currentIndex}
                ref={sliderRef}
                style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} data={data} renderItem={(data) => <Image style={{objectFit:'cover',width,height:'100%'}} source={data.item.image} />} />
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={onPress}>
                        <Badge color='#000' iconSize={25} icon={'arrow-back-outline'} backgroundColor='#D9D9D980' />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', columnGap: 10 }}>
                        <Badge color='#000' iconSize={25} icon={'arrow-redo-outline'} backgroundColor='#D9D9D980' />
                        <Badge color='#000' iconSize={25} icon={'heart-outline'} backgroundColor='#D9D9D980' />
                    </View>
                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <Badge color='#000' text={'3 minutes'} iconSize={15} icon={'time'} backgroundColor='#D9D9D980' />
                    <Indicator data={data} scrollX={scrollX} width={width} />
                    <Badge color='#000' text={'Brazzaville'} iconSize={15} icon={'location'} backgroundColor='#D9D9D980' />
                {/* </View> */}
            </View>
        </View>
    )
}

export default ItemDetailSilder

const Indicator = ({data,scrollX,width}) =>{

    return (<View style={{ flexDirection:'row',columnGap:10,alignItems:'center' }}>
        {data.map((item: any,idx: number) => {
            const inputRange = [(idx -1) * width,idx * width,(idx + 1) * width ]
            const dotbg = scrollX.interpolate({
                inputRange,
                outputRange:['#fff','#0044BB','#fff'],
                extrapolate:'clamp'
            })
        return (<Animated.View key={idx.toString()} style={{ width:8,height:8,borderRadius:8, backgroundColor:dotbg }}/>)
    })}

    </View>)
}
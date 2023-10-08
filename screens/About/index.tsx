import { StatusBar } from 'expo-status-bar';
import { View, FlatList, useWindowDimensions, Animated } from 'react-native';
import ButtonNexted from '../../components/ButtonNext';
import IndicatorCircle from '../../components/IndicatorCircle';
import { data } from './data';
import { useRef, useState } from 'react';
import Abouting from '../../components/Abouting';


const About = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const dimensions = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewConfig = useRef({ viewAreaCOveragePercentThreshold: 50 }).current;
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
    const { width, height } = useWindowDimensions()

    return (
        <View style={{ backgroundColor: '#0044BB', flex: 1 }} >
            <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', top: dimensions.height / 2 + 50, zIndex: 12, width: dimensions.width }}>
                <IndicatorCircle data={data} index={currentIndex} scrollX={scrollX} />
            </View>
            <FlatList
                style={{ width: width }}
                data={data}
                renderItem={(item) => <Abouting width={width} height={height} image={item.item.image} title={item.item.title}  {...{ describe: item.item.describe, }} />}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                bounces={false}
                snapToAlignment='center'
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={32}
                initialScrollIndex={currentIndex}
                onViewableItemsChanged={handleOnViewbleItemsChanged}
                ref={sliderRef}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
            />
            <View style={{ height: 150 }}>
                <ButtonNexted onPress={() => {
                    if (currentIndex === data.length - 1) {
                        // Navigation vers une autre vue, par exemple.
                        navigation.navigate('tab');
                    } else {
                        const nextSLideIndex = currentIndex + 1;
                        const offset = nextSLideIndex * width;
                        sliderRef?.current?.scrollToOffset({ offset });
                        setCurrentIndex(nextSLideIndex);
                    }
                }}
                />

            </View>
        </View>
    );
}
export default About;
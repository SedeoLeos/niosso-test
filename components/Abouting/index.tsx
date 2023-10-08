import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, View, useWindowDimensions, Text, GestureResponderEvent, ImageSourcePropType } from "react-native";
import { styles } from './style'
export class AboutingPropos {
    image: ImageSourcePropType;
    title: string;
    describe: string;
    width: number;
    height: number;
    onPress?: (event: GestureResponderEvent) => void
}
const Abouting = (props: AboutingPropos) => {
    const { image, title, describe, width, height } = props;
    const start = {
        x: 0, y: 0
    }
    const end = {
        x: 0,
        y: 1
    }
    const colors = ['rgba(0, 0, 0, 0)', 'rgba(0, 68, 187, 0.9)', 'rgba(0, 68, 187, 1)'];
    return (
        <View style={[styles.container, { width }]}>

            <ImageBackground source={image} style={styles.image} />
            <View style={styles.blue}>
                <LinearGradient style={styles.linearGradient}
                    colors={colors}
                    start={start}
                    end={end}
                />
                 <View>
                     <Text style={[styles.textTitle, styles.test ]}>{title}</Text>
                     <Text style={[ styles.textDescrible, styles.test ]}>{describe}</Text>
                 </View>
            </View>
        </View>
    );
}

export default Abouting;
// const Abouting = (props: AboutingPropos) => {
//     const { image, title, describe } = props;
//     const start ={
//         x:0, y:0
//     }
//     const end = {
//         x: 0,
//         y:1
//     }
//     const colors = ['rgba(0, 0, 0, 0)', 'rgba(0, 68, 187, 0.9)', 'rgba(0, 68, 187, 1)'];
//     return (
//         <View style={[styles.container,{width:'100%',height:'100%'}]}>
//             <ImageBackground source={image} style={[styles.image,{width:'100%'}]} />
//             <View style={styles.blue}>
//                 <LinearGradient style={styles.linearGradient}
//                     colors={colors}
//                     start={start}
//                     end={end}
//                 />
//                 <View>
//                     <Text style={[styles.textTitle, styles.test ]}>{title}</Text>
//                     <Text style={[ styles.textDescrible, styles.test ]}>{describe}</Text>
//                 </View>
//             </View>
//         </View>
//     );
// }


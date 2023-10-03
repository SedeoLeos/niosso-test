import { View, Text, Image, ImageSourcePropType, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
class ImagegButtonProps {
    image?: ImageSourcePropType;
    text?: string
}
const ImageButtonText = (data: ImagegButtonProps) => {
    const { image, text } = data
    return (
        <Pressable style={styles.catherogierItem} >
            <View style={styles.catherogierContenaireImage}>
                <Image style={styles.catherogierItemImage} source={image} />
            </View>
            <Text style={styles.catherogierItemTest}>{text}</Text>
        </Pressable>
    )
}

export default ImageButtonText
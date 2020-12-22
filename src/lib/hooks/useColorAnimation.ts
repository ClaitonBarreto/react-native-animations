import { useRef } from 'react'
import { Animated } from 'react-native'

interface Props {
    colors:Array<string>
}

const useColorAnimation = ({colors}:Props) => {

    const componentRef = useRef(new Animated.Value(0)).current
    let inputRange = colors.map((color,index) => {
        return index
    })

    const color = componentRef.interpolate({
        inputRange,
        outputRange: colors
    })

    function anime(duration:number, reverse?:boolean) {
        Animated.timing(componentRef, {
            toValue: reverse ? 0 : colors.length-1,
            useNativeDriver: true,
            duration
        }).start() 
    }

    return {color, anime}
}


export default useColorAnimation

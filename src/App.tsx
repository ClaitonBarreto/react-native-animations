import React from 'react'
import {View, Animated, TouchableHighlight, Text} from 'react-native'

import useColorAnimation from './lib/hooks/useColorAnimation'
 

const App = () => {
    
    const { anime, color } = useColorAnimation({colors: ['red','blue','green','black', 'violet', '#777']})

    return (
        <>
            <Animated.View style={{
                flex: 1,
                height: 100,
                width: 100,
                backgroundColor: color
            }}>

            </Animated.View>
            <TouchableHighlight onPress={() => anime(1000)}>
                <Text>Press me</Text>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => anime(1000, true)}>
                <Text>Press me to back</Text>
            </TouchableHighlight>
        </>
    )

}

export default App
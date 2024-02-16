import React from 'react';
import { Pressable, Text } from "react-native";




export const CustomBtn = ({ text, onClick,styleBtn ,styleTxt }) => {

    return (
        <Pressable
            onPress={onClick}
            style={styleBtn}>
            <Text style={styleTxt}>{text}</Text>
        </Pressable>

    )
}


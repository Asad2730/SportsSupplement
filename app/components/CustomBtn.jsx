import React from 'react';
import { Pressable, Text } from "react-native";
import { customStyles } from '../utils/styles';



export const CustomBtn = ({ text, onClick }) => {

    return (
        <Pressable
            onPress={onClick}
            style={customStyles.button}>
            <Text style={customStyles.text}>{text}</Text>
        </Pressable>

    )
}


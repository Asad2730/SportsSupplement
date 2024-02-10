import { StyleSheet } from "react-native";
import { colors } from "./colors";


 export const customStyles = StyleSheet.create({
    input: {
      borderWidth: 1,
      height: "10%",
      margin: 10,
      borderRadius: 60,
      backgroundColor: colors.secondary_light,
      paddingLeft: 20,
    },
    button: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width:'auto',
        height: "10%",
        backgroundColor: colors.secondary_color,
        borderRadius: 60,
        margin:10,
    },
    text: {
        color: colors.primary_color,
        fontSize: 20, 
    }
  });
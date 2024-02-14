import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { customStyles } from "../utils/styles";
import { Get_Image_url } from "../utils/helpers";
import { colors } from "../utils/colors";

export const renderChatItem = ({ item }) => {
    if (!item || typeof item.getImage !== 'function' || typeof item.getName !== 'function') {
      return <Text style={customStyles.text}>Loading...</Text>;
    }
  
    return (
      <View style={styles.card}>
        <View style={styles.image_container}>
          <Image 
           style={styles.image}
           source={{ uri:`${Get_Image_url}/${item.getImage()}` }}
             />
        </View>
        <View style={styles.name_conatiner}>
          <Text style={customStyles.text}>{item.getName()}</Text>
        </View>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  card: {
   marginTop:5, 
   marginBottom:5,
    flex: 1,
    borderRadius: 10, 
    borderColor: colors.secondary_color, 
    borderWidth: 1, 
    overflow: 'hidden', 
    flexDirection: 'row',
    alignItems: 'center', 
    paddingHorizontal: 10, 
  },
  image_container: {
    flex: 0.3,
  },
  name_conatiner: {
    flex: 0.7,
  },
 
  image: {
    height:100,
    width:100,
    resizeMode:'cover'
  },

});

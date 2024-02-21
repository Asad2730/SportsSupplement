import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { customStyles } from "../utils/styles";
import { Get_Image_url } from "../utils/helpers";
import { useNavigation } from "@react-navigation/native";
import {
  Add_Remove_CartComponent,
  QuantityComponent,
} from "../hooks/productItem";

const ProductItem = ({ item }) => {
  const navigation = useNavigation();
  const isCart = item.qty;
  const isHistory = item.isHistory;
  return (
    <View style={customStyles.card}>
      <Pressable
        style={styles.image_container}
        onPress={() => navigation.navigate("product-detail", { product: item })}
      >
        <Image
          style={styles.image}
          source={{ uri: `${Get_Image_url}/${item.image}` }}
        />
      </Pressable>
      <View style={styles.name_container}>
        <Text style={customStyles.text}>{item.name}</Text>
      </View>
      <View style={styles.btn_container}>
        {isCart ? <QuantityComponent item={item} /> : null}
        {isHistory ? null : <Add_Remove_CartComponent id={item.id} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image_container: {
    flex: 0.3,
  },
  name_container: {
    flex: 0.5,
  },
  btn_container: {
    flex: 0.2,
  },

  image: {
    height: 100,
    width: 100,
    resizeMode: "cover",
  },
});

export default ProductItem;

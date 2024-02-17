import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { customStyles } from "../utils/styles";
import { Get_Image_url } from "../utils/helpers";
import { colors } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import {
  Add_Remove_CartComponent,
  QuantityComponent,
} from "../hooks/productItem";

const ProductItem = ({ item }) => {
  const navigation = useNavigation();
  const isTrue = item.qty;

  return (
    <View style={styles.card}>
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
        {isTrue ? <QuantityComponent item={item} /> : null}
        <Add_Remove_CartComponent id={item.id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 5,
    marginBottom: 5,
    flex: 1,
    borderRadius: 10,
    borderColor: colors.secondary_color,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
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

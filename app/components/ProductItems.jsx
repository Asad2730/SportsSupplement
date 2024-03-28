import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import { customStyles } from "../utils/styles";
import { Get_Image_url } from "../utils/helpers";
import { useNavigation } from "@react-navigation/native";
import {
  Add_Remove_CartComponent,
  QuantityComponent,
} from "../hooks/productItem";
import { colors } from "../utils/colors";

const windowHeight = Dimensions.get("window").height;

const ProductItem = ({ item, index }) => {
  const navigation = useNavigation();
  const isCart = item.qty;
  const isHistory = item.isHistory;
  const [backgroundColor, setBackgroundColor] = useState(
    colors.card_back_ground_2
  );

  const handlePressIn = () => {
    setBackgroundColor(colors.card_back_ground_1);
  };

  const handlePressOut = () => {
    setBackgroundColor(colors.card_back_ground_2);
  };

  height = isCart ? windowHeight * 0.35 : windowHeight * 0.30;
  return (
    <Pressable
      style={[customStyles.card, { backgroundColor, height }]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => navigation.navigate("product-detail", { product: item })}
    >
      <View style={styles.image_container}>
        <Image
          style={styles.image}
          source={{ uri: `${Get_Image_url}/${item.image}` }}
        />
      </View>

      <View style={styles.detail_container}>
        <View style={styles.item_container}>
          <Text style={[customStyles.text, { fontWeight: "bold" }]}>
            {item.name}
          </Text>

        </View>

        <View style={styles.item_container}>
          <Text style={[customStyles.text, { color: colors.price_txt }]}>
            ${item.price}
          </Text>
        </View>

        <View style={styles.btn_container}>
          {isCart ? <QuantityComponent item={item} /> : null}
          {isHistory ? null : <Add_Remove_CartComponent id={item.id} />}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image_container: {
    alignSelf: "center",
    marginTop: 2,
  },

  detail_container: {
    padding:8,
  },

  item_container: {
    marginLeft:2,
    marginTop:3,
    marginBottom:2,
  },
  btn_container: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 100,
    width: 100,
    resizeMode: "cover",
  },
});

export default ProductItem;

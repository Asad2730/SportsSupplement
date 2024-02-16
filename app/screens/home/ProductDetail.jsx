import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, Pressable } from "react-native"; 
import { colors } from "../../utils/colors";
import { Get_Image_url } from "../../utils/helpers";
import { customStyles } from "../../utils/styles";
import useCartOperations from "../../hooks/useCartOperations";
import CustomIcon from "../../components/CustomIconBtn";

const ProductDetail = () => {
  const route = useRoute();
  const { product } = route.params;
  const { add, remove, checkIfAlreadyAdded } = useCartOperations();
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: `${Get_Image_url}/${product.image}` }}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.item}>
          <Text style={customStyles.text}>{product.name}</Text>
        </View>
        <View style={styles.item}>
          <Text style={customStyles.text}>${product.price}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text
          style={[customStyles.text, expanded ? styles.expandedDescription : {}]}
          numberOfLines={expanded ? undefined : 3}
        >
          {product.description}
        </Text>
        {!expanded && (
          <Pressable onPress={toggleDescription}>
            <Text style={styles.readMore}>Read more</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.btnContainer}>
        {checkIfAlreadyAdded(product.id) ? (
          <CustomIcon
            txt={"Remove"}
            iconName={"remove-shopping-cart"}
            onClick={() => remove(product.id)}
          />
        ) : (
          <CustomIcon
            txt={"Add"}
            iconName={"add-shopping-cart"}
            onClick={() => add(product.id)}
          />
        )}
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_color,
  },
  imageContainer: {
    flex: 0.5,
    width: "100%",
    marginBottom: 20,
  },
  infoContainer: {
    flex: 0.1,
  },
  descriptionContainer: {
    flex: 0.3,
    paddingHorizontal: 10,
  },
  btnContainer: {
    flex: 0.1,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  item: {
    flex: 0.5,
    marginLeft: 10,
  },
  expandedDescription: {
    marginBottom: 10, 
  },
  readMore: {
    color: "blue",
    marginTop: 5,
  },
});

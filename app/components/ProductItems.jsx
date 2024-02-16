import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import { customStyles } from "../utils/styles";
import { Get_Image_url } from "../utils/helpers";
import { colors } from "../utils/colors";
import CustomIcon from "./CustomIconBtn";
import { useNavigation } from "@react-navigation/native";
import useCartOperations from "../hooks/useCartOperations";
import { CustomBtn } from "../components/CustomBtn";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty } from "../store/cart/cartSlice";

const ProductItem = ({ item }) => {
  const navigation = useNavigation();
  const dispacth =  useDispatch();
  const { add, remove, checkIfAlreadyAdded } = useCartOperations();

  const isTrue = item.qty;

  const QuantityComponent = ({ item }) => {
    const id = item.id;
    return (
      <>
        <CustomBtn
          text={"+"}
          styleBtn={styles.button}
          styleTxt={customStyles.text}
          onClick={()=>dispacth(incrementQty({id}))}
        />
        <TextInput
          style={customStyles.input}
          keyboardType="numeric"
          value={item.qty.toString()}
        />
        <CustomBtn
          text={"-"}
          styleBtn={styles.button}
          styleTxt={customStyles.text}
          onClick={()=>dispacth(decrementQty({id}))}
        />
      </>
    );
  };

  const Add_Remove_CartComponent = ({ id }) => (
    <>
      {checkIfAlreadyAdded(id) ? (
        <CustomIcon
          txt={"Remove"}
          iconName={"remove-shopping-cart"}
          onClick={() => remove(id)}
        />
      ) : (
        <CustomIcon
          txt={"Add"}
          iconName={"add-shopping-cart"}
          onClick={() => add(id)}
        />
      )}
    </>
  );

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

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "auto",
    backgroundColor: colors.secondary_color,
    borderRadius: 20,
    margin: 10,
  },
});

export default ProductItem;

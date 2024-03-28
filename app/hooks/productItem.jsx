import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { CustomBtn } from "../components/CustomBtn";
import { decrementQty, incrementQty } from "../store/cart/cartSlice";
import { customStyles } from "../utils/styles";
import { useDispatch } from "react-redux";
import useCartOperations from "./useCartOperations";
import CustomIcon from "../components/CustomIconBtn";
import { colors } from "../utils/colors";

export const QuantityComponent = ({ item }) => {
  const dispatch = useDispatch();

  const id = item.id;
  return (
    <View style={styles.container}>
      <CustomBtn
        text={"+"}
        styleBtn={styles.button}
        styleTxt={customStyles.text}
        onClick={() => dispatch(incrementQty({ id }))}
      />
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={item.qty.toString()}
      />
      <CustomBtn
        text={"-"}
        styleBtn={styles.button}
        styleTxt={customStyles.text}
        onClick={() => dispatch(decrementQty({ id }))}
      />
    </View>
  );
};

export const Add_Remove_CartComponent = ({ id }) => {
  const { add, remove, checkIfAlreadyAdded } = useCartOperations();
  return (
    <View style={styles.container}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
   
    backgroundColor: colors.secondary_color,
    borderRadius: 20,
   
  },
  input: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 60,
    backgroundColor:  colors.secondary_color,
    paddingLeft: 20,
  },
 
});

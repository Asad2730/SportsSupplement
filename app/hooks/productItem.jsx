import { StyleSheet, TextInput } from "react-native";
import { CustomBtn } from "../components/CustomBtn";
import { decrementQty, incrementQty } from "../store/cart/cartSlice";
import { customStyles } from "../utils/styles";
import { useDispatch } from "react-redux";
import useCartOperations from "./useCartOperations";
import CustomIcon from "../components/CustomIconBtn";
import { colors } from "../utils/colors";

export const QuantityComponent = ({ item }) => {
  const dispacth = useDispatch();

  const id = item.id;
  return (
    <>
      <CustomBtn
        text={"+"}
        styleBtn={styles.button}
        styleTxt={customStyles.text}
        onClick={() => dispacth(incrementQty({ id }))}
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
        onClick={() => dispacth(decrementQty({ id }))}
      />
    </>
  );
};

export const Add_Remove_CartComponent = ({ id }) => {
  const { add, remove, checkIfAlreadyAdded } = useCartOperations();
  return (
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
};

const styles = StyleSheet.create({
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

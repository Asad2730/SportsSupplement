import React, { useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import { customStyles } from "../../utils/styles";
import { CustomBtn } from "../../components/CustomBtn";
import { getSelectedProducts } from "../../store/cart/cartSlice";
import RenderFlashList from "../../components/RenderFlashList";
import { useFocusEffect } from "@react-navigation/native";
import uuid from 'react-native-uuid';
import { createCart, createCartAssociate } from "../../store/cart/cartApiRequest";

const Cart = () => {
  const products = useSelector((state) => state.home.products);
  const user = useSelector((state) => state.auth.user);
  const filterProducts = useSelector((state) => state.cart.selected_products);
  const error =  useSelector((state)=>state.cart.error);
  const loading = useSelector((state)=>state.cart.loading);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(getSelectedProducts(products));
 
    }, [dispatch, products,loading])
  );


  const calculateTotalBill = () => {
    let totalPrice = 0;
    filterProducts.forEach((product) => {
      totalPrice += product.price * product.qty;
    });
    return totalPrice;
  };

  const submit = () => {
    const cid =uuid.v4();
    const timestamp = Date.now();
    const currentDate = new Date(timestamp);
   
    let obj1 = {
      id: cid, 
      useremail: user.email,
      totalBill: calculateTotalBill(),
      orderDate: currentDate.toDateString(),
    };
    
   dispatch(createCart(obj1))
    filterProducts.map((product) => {
      const id =uuid.v4();
      let obj2 = {
        id: id,
        cid: cid, 
        pId: product.id,
      };
      
      dispatch(createCartAssociate(obj2))
    });
    
    if(error !== null){
      console.error('Error:',error)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.confirm_order_container}>
        <Text style={customStyles.text}>
          Your Total bill is:{calculateTotalBill()}
        </Text>
        <CustomBtn
          styleBtn={styles.button}
          styleTxt={customStyles.text}
          text={"Confirm Order"}
          onClick={() => submit()}
        />
      </View>
      <View style={styles.list_of_order_container}>
        <RenderFlashList products={filterProducts} />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary_color,
  },
  confirm_order_container: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  list_of_order_container: {
    flex: 0.6,
  },
  button: {
    backgroundColor: colors.secondary_color,
    margin: 10,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "10%",
  },
  item: {
    flex: 0.5,
  },
});

import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { colors } from "../../utils/colors";
import { FlashList } from "@shopify/flash-list";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItems";
import { customStyles } from "../../utils/styles";
import { useField } from "../../hooks/useField";

const Cart = () => {
  const products = useSelector((state) => state.home.products);
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.cart.cart);
  const filterProducts = products.filter((i) => cart.includes(i.id));
  // console.log('user',user.email)
  const qty = useField(1);
  
  return (
    <View style={styles.container}>
      <View style={styles.confirm_order_container}></View>
      <View style={styles.list_of_order_container}>
        <SafeAreaView style={{ flex: 1 }}>
          {filterProducts.length > 0 ? (
            <FlashList
              data={filterProducts}
              renderItem={({ item }) => <ProductItem item={item} />}
              estimatedItemSize={135}
            />
          ) : (
            <View style={styles.center_txt}>
                  <Text style={customStyles.text}>No products available</Text>
            </View>
          )}
        </SafeAreaView>
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
    flex: 0.3,
  },
  list_of_order_container: {
    flex: 0.7,
  },
  center_txt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

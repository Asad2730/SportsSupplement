import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { FlashList } from "@shopify/flash-list";
import ProductItem from "./ProductItems"
import { customStyles } from "../utils/styles";


export default RenderFlashList = ({products}) => {
   return(
    <SafeAreaView style={{ flex: 1 }}>
    {products.length > 0 ? (
      <FlashList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        estimatedItemSize={135}
      />
    ) : (
      <View style={customStyles.center_txt}>
        <Text style={customStyles.text}>No products available</Text>
      </View>
    )}
  </SafeAreaView>
   )
}


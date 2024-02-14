import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/home/homeApiRequest";
import { ActivityIndicator,StyleSheet, View , SafeAreaView, Text} from "react-native";
import { colors } from "../../utils/colors";
import { renderChatItem } from "../../components/ProductItems";
import { FlashList } from "@shopify/flash-list";




const Products = () => {
  const products = useSelector((state) => state.home.products);
  const loading = useSelector((state) => state.home.loading);
  const error = useSelector((state) => state.home.error);

  const dispatch = useDispatch();
  
 
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (error !== null) {
      console.log("Error Effect", error);
    }
  }, [error]);

  return (
    <>
         {loading ? (
             <ActivityIndicator size="large" color="#0000ff" />
         ) : (
            <View style={styles.container}>
                <View style={styles.logo_container}/>
                <View style={styles.list_container}>
                  <SafeAreaView style={{flex:1}}>
                    {products.length > 0 ? (
                      <FlashList 
                        data={products}
                        renderItem={renderChatItem}
                        estimatedItemSize={135}
                      />
                    ) : (
                      <Text>No products available</Text>
                    )}
                  </SafeAreaView>
                </View>
               
            </View>
         )}
    </>
  );
};

export default Products;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo_container: {
    flex: 0.1,
    backgroundColor:colors.secondary_color
  },
  list_container: {
    flex: 0.90,
    backgroundColor: colors.primary_color
  },
 
});

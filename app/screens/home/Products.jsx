import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/home/homeApiRequest";
import { ActivityIndicator, View ,Text} from "react-native";

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
         {loading?(
             <ActivityIndicator size="large" color="#0000ff" />
         ):(

            <View>
                <Text>Products....</Text>
            </View>
         )}
    </>
  );
};

export default Products;

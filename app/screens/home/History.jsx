import { FlashList } from "@shopify/flash-list";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserHistory } from "../../store/cart/cartApiRequest";
import { customStyles } from "../../utils/styles";
import { colors } from "../../utils/colors";
import HistoryItems from "../../components/HistoryItems";



function History() {
  const user = useSelector((state) => state.auth.user);
  const history = useSelector((state) => state.cart.user_history);
  const error = useSelector((state) => state.cart.error);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserHistory = async () => await dispatch(getUserHistory(user.email));
    fetchUserHistory();
  }, [dispatch, user.email,]);

  useEffect(() => {
    if (error !== null) {
      console.error("Error:", error);
    }
  }, [error]);

  return (
    <View style={styles.container}>
      <View style={styles.header_container} />
      <SafeAreaView style={styles.list_container}>
        {history.length > 0 ? (
          <FlashList
            data={history}
            renderItem={({ item }) => <HistoryItems item={item} />}
            estimatedItemSize={135}
          />
        ) : (
          <View style={customStyles.center_txt}>
            <Text style={customStyles.text}>No products available</Text>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.primary_color,

  },
  list_container: {
    flex: 0.9,
  },
  header_container: {
    flex: 0.1,
  },
});

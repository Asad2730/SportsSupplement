import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { customStyles } from "../utils/styles";
import RenderFlashList from "./RenderFlashList";
import { colors } from "../utils/colors";

export default RenderHistoryItem = ({ item }) => {
  const products = useSelector((state) => state.home.products);
  let product = products.filter((i) => item.pids.includes(i.id));
  product = product.map((productItem) => ({
    ...productItem,
    isHistory: true,
  }));
  return (
    <View style={[customStyles.card, styles.card_color]}>
      <View style={styles.main_container}>
        <View style={styles.item_container}>
          <Text style={[customStyles.text, styles.txt_color]}>
            {item.orderDate}
          </Text>
          <Text style={[customStyles.text, styles.txt_color]}>
            Total Bill: {item.totalBill}
          </Text>
        </View>
        <View style={styles.list_container}>
          <RenderFlashList products={product} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginBottom: 10,
  },
  item_container: {
    marginTop: 10,
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  list_container: {
    flex: 0.8,
    minHeight: 100,
    minWidth: 100,
    marginTop: 10,
  },
  card_color: {
    backgroundColor: colors.secondary_light,
  },
  txt_color: {
    color: colors.secondary_color,
  },
});

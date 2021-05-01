import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as cartActions from "../../store/actions/cart";

const ProductDetailScreen = (props) => {
  const { getParam } = props.navigation;
  const productId = getParam("productId");
  const SelectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: SelectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(SelectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${SelectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{SelectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: "#888",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "open-sans-bold",
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "open-sans",
  },
  actions: {
    marginVertical: 10,
    alignItems: "center",
  },
});

export default ProductDetailScreen;

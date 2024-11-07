import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { ICartItem, ProductDTO } from "../types/Product";
import { CartContext } from "../contexts/CartContext";
import CartCard from "../components/CartCard";
import { axiosInstance } from ".././utils/axios";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Cart = () => {
  const { cart, getCart, addProduct, removeProduct } = useContext(CartContext);

  // useEffect(() => {

  // });

  // Enviar as informações dentro de um objeto do tipo
  return (
    <SafeAreaProvider>
      <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView}>
        <SafeAreaView>
          <Text>Lo Carto!!!</Text>
          <TouchableOpacity onPress={getCart}>
            <Text>Atualizar carrinho</Text>
          </TouchableOpacity>
          <FlatList
            style={{ alignSelf: "center", flex: 1 }}
            data={cart}
            renderItem={CartCard} // ({ item }) => <CartCard produto={item} />
            keyExtractor={(item) => item.product.id.toString()}
            ListEmptyComponent={<Text>NADA ENCONTRADOOOO!!!!</Text>}
          />
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Cart;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#dbdbdb",
  },
});

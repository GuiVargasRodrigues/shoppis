import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { ICartItem } from "../types/Product";

const CartCard = ({ item }: { item: ICartItem }) => {
  return (
    <View>
      <Text>ProductCard</Text>
      <Text>{item.product.title}!!!</Text>
      <Text>
        R$ {item.product.price}. Quantidade: {item.quantity}.
      </Text>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({});

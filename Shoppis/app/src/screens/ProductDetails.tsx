import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import CardComponent from "../components/CardComponent";
import { CartContext } from "../contexts/CartContext";
import { axiosInstance } from "../utils/axios";
import { ProductDTO } from "../types/Product";
import ProductCard from "../components/ProductCard";
import { useRoute } from "@react-navigation/native";

// interface SmallVideoProbs {
//   title: string;
//   subtitle: string;
//   image: string;
// }

// const SmallVideo = ({ title, subtitle, image }: SmallVideoProbs) => {

const ProductDetails = () => {
  const itens = useRoute<any>();
  const item = itens.params?.item;
  // { item }: { item: ProductDTO }
  const { cart, getCart, addProduct, removeProduct } = useContext(CartContext);
  /* <Text>ProductDetails</Text> */
  // <CardComponent />

  // <ProductCard item={item} /> ta temporariamente ali por pura preguiça de fazer um mini frontend, -matheus

  const getData = async (input: string) => {
    try {
      const response = await axiosInstance.get<ProductDTO>(
        "/products/" + input
      );
      addProduct(response.data);
    } catch (error) {
      console.log("Erro ao fazer fetching data:", error);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => getData(item.id.toString())}>
        <Text>Adicionar algo no carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});

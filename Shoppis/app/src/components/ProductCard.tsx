import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ProductDTO } from "../types/Product";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackProductList } from "../types/StackProductList";

const ProductCard = ({ item }: { item: ProductDTO }) => {
  const navigation = useNavigation<NavigationProp<StackProductList>>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", item)}
    >
      <View style={styles.container}>
        <Text>ProductCard</Text>
        <Text>{item.title}!!!</Text>
        <Text>
          {item.price}, #{item.id}, {item.category}
        </Text>
        <Text>
          Rate: {item.rating.rate}, Num-avaliações: {item.rating.count}
        </Text>
        <Text>{item.description}</Text>
        <Image
          source={{ uri: item.image }}
          style={{ width: 200, height: 200 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

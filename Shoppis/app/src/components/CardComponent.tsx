import React  from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';

// Products component
const CardComponent = ({ productImage, productName, productDescription, productPrice}:any) => {

    return (
        <View style={style.container}>

            <Image style={style.image} source={{uri: productImage}} />
            <Text style={style.productName}>{productName}</Text>            
            <Text style={style.text}>{productDescription}</Text>
            <View style={style.containerCart}> 
                <Text>R$ {productPrice}</Text>
                <TouchableOpacity> <Feather name="shopping-cart" size={24} color="black" /> </TouchableOpacity>
            </View>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        display: 'flex',
        width: 210,
        height: 270,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 5,
        gap: 15,
        textAlign: 'center'
    },

    containerCart: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    image:{
        width: 100,
        height: 100,
        marginTop: 15
    },

    text: {
        textAlign: 'center',
    },

    productName: {
        fontWeight: 'bold'
    },

})



export default CardComponent;
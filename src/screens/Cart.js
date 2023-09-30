import BackgroundApp from "../components/BackgroundApp";
import React, { useState } from "react";
import { StyleSheet, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { cartList } from "../components/Products";

export default function Cart() {
  const [cart, setCart] = useState(cartList); // Inicialize o estado cart com cartList

  const removeFromCart = (item) => {
    // Crie uma nova lista de carrinho excluindo o item que está sendo removido
    const newCart = cart.filter((product) => product.id !== item.id);
    setCart(newCart); // Atualize o estado cart

    // Também é possível atualizar cartList diretamente se necessário
    const product = cartList.find((product) => product.id === item.id);
    if (product) {
      product.quantidade = 0;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <>
        <Image source={{ uri: item.imagem }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{item.nome}</Text>
        <Text style={styles.cardPrice}>Preço: R${item.preco.toFixed(2)}</Text>
        <Text style={styles.cardDescription}>{item.descricao}</Text>
      </>
      <TouchableOpacity
        style={styles.removeFromCartButton}
        onPress={() => removeFromCart(item)}
      >
        <Text style={styles.removeFromCartButtonText}>Remover do Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <BackgroundApp>
      <View style={styles.container}>
        <Text style={styles.title}>Shopping Cart</Text>
        <FlatList
          data={cart} // Use o estado cart para exibir os itens no carrinho
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View>
          <Text style={styles.total}>
            Total: R${cart.reduce((acc, item) => acc + (item.preco * item.quantidade), 0).toFixed(2)}
          </Text>
        </View>
      </View>
    </BackgroundApp>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 80,
    },
    title: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    total: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 13,
        textAlign: 'center',
        backgroundColor: 'green',
        borderRadius: 10,
    },
    card: {
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    cardImage: {
        width: '100%',
        height: 220,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    cardTitle: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardPrice: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDescription: {
        color: '#000',
        fontSize: 16,
        marginBottom: 10,
    },
    removeFromCartButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
    removeFromCartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
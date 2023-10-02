import BackgroundApp from "../components/BackgroundApp";
import { StyleSheet, Text, FlatList, Image } from "react-native";
import { View } from "react-native";
import { useCart } from "../providers/CartContext";
import Button from "../components/Button";

export default function Cart() {
  const { cart, addItemToCart,removeItemFromCart } : any = useCart();

  const renderItem = ({ item } : any) => (
    <View style={styles.card}>
      {<><Image source={{ uri: item.imagem }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.nome}</Text>
      <Text style={styles.cardPrice}>Preço: R${item.preco.toFixed(2)}</Text>
      <View style={styles.cardButtons}>
      <Text style={styles.cardDescription}>{item.descricao}</Text>
      <Button text="-" onPress={() => removeItemFromCart(item)} styleText={styles.removeFromCartButton}/><Text style={styles.itemQuantity}>{item.quantidade}</Text><Button text="+" onPress={() => addItemToCart(item)} styleText={styles.addItemsToCart}/>
      </View>
      </>}
    </View>
  );

  return (
    <BackgroundApp>
      <View style={styles.container}>
        <Text style={styles.title}>Shopping Cart</Text>
        <View style={styles.containerTotal}>
          <Text style={styles.total}>
            Total: R${cart.reduce((acc : any, item : any) => acc + (item.preco * item.quantidade), 0).toFixed(2)}
          </Text>
        </View>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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
        textAlign: 'center',
        borderRadius: 10,
    },
    containerTotal:{
      backgroundColor: '#F5FFFA',
      borderRadius: 5,
      width: '80%',
      marginStart: 40,
      marginTop: 10,
      marginBottom: 10,
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
        fontSize: 25,
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
    addItemsToCart: {
      backgroundColor: '#90EE90',
      borderRadius: 10,
      width: 25,
      height: 20,
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
  },
    removeFromCartButton: {
        backgroundColor: '#FF6347',
        borderRadius: 10,
        width: 25,
        height: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemQuantity: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
});
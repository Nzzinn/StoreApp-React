import BackgroundApp from "../components/BackgroundApp";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

export default function Cart(){
    return(
        <BackgroundApp>
            <View style={styles.container}>
                <Text style={styles.title}>Shopping Cart</Text>
            </View>
        </BackgroundApp>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 80,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginLeft: 20,
    }
});
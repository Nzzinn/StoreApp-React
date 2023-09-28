import BackgroundApp from "../components/BackgroundApp";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import Products from "../components/Products";

export default function Home(){
    return(
        <BackgroundApp>
            <View style={styles.container}>
                <Text style={styles.title}>Store App</Text>
                <Products />
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
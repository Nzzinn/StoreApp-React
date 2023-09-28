import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";

export default function BackgroundApp({ children }) {
  return (
    <SafeAreaView style={styles.container}>
        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d5d5d5",
    },
    });
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import BackgroundApp from "./BackgroundApp";

export default function ConfirmLogout({navigation} : any){
    const dontExit = () => {
        navigation.navigate('store');
    }

    const exit = () => {
        navigation.navigate('login');
    }

    return(
        <BackgroundApp>
            <View style={styles.container}>
                <Text style={styles.title}>Tem certeza que deseja sair?</Text>
                <View style={styles.btnContainer}>
                    <Button text="Não" onPress={dontExit} styleButton={styles.btn} styleText={styles.btnText}/>
                    <Button text="Sim" onPress={exit} styleButton={styles.btn} styleText={styles.btnText}/>
                </View>
            </View>
        </BackgroundApp>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d5d5d5',
        height: 130,
        width: '80%',
        marginTop: 380,
        marginLeft: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: '#000',
        height: 40,
        width: 50,
        marginTop: 10,
        marginRight: 30,
        marginLeft: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold'
    }
})
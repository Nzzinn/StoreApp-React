import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import TabRoutes from './tab.routes';


const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={
            {
                headerShown: false,
            }
        }>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen
                name="menu"
                component={TabRoutes}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
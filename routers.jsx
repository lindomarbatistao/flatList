import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './pages/home'
import Edit from './pages/edit'

const Pilha = createStackNavigator()

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>

                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Edit"
                    component={Edit}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}
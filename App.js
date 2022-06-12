import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import DetalhesProduto from "./src/views/detalhes-de-produto";
import Estoque from "./src/views/estoque";
import HistoricoVendas from "./src/views/historico-vendas";
import InserirProduto from "./src/views/inserir-produto";
import Login from "./src/views/login";
import Menu from "./src/views/menu";
import Signup from "./src/views/signup";
import Vendas from "./src/views/vendas";
import AdicionarCarrinho from "./src/views/adicionar-ao-carrinho";
import Carrinho from "./src/views/carrinho";
import DetalhesVenda from "./src/views/detalhes-da-venda";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Estoque" component={Estoque} />
          <Stack.Screen name="Vendas" component={Vendas} />
          <Stack.Screen name="HistoricoVendas" component={HistoricoVendas} />
          <Stack.Screen name="InserirProduto" component={InserirProduto} />
          <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} />
          <Stack.Screen name="AdicionarCarrinho" component={AdicionarCarrinho} />
          <Stack.Screen name="Carrinho" component={Carrinho} />
          <Stack.Screen name="DetalhesVenda" component={DetalhesVenda} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

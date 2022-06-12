import React from 'react';
import Button from '../../components/button';
import Header from "../../components/appBar";

const Menu = ({ navigation }) => {
    return (
        <Header title="Menu" navigation={navigation}>
            <Button variant="contained" onClick={() => navigation.navigate('Vendas')}>Vendas</Button>
            <p>Registre sua venda e consulte seu histórico de vendas</p>
            <Button variant="contained" onClick={() => navigation.navigate('Estoque')}>Estoque</Button>
            <p>Atualize, gerencie e veja a lista de produtos vendidos a serem repostos</p>
            <Button variant="contained" onClick={() => navigation.navigate('HistoricoVendas')}>Histórico de vendas</Button>
            <p>Consulte seu histórico de vendas</p>
        </Header>
    )
}

export default Menu;
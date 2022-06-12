import React from 'react';
import Button from '../../components/button';
import Header from "../../components/appBar";

const Vendas = ({ navigation }) => {
    return (
        <Header title="Vendas" goBack={true} navigation={navigation}>
            <h1>O que deseja fazer?</h1>
            <Button variant="contained" onClick={() => navigation.navigate('InserirProduto')}>Registrar uma venda</Button>
            <Button variant="contained" onClick={() => navigation.navigate('HistoricoVendas')}>Histórico de vendas</Button>

        </Header>);

}

export default Vendas;
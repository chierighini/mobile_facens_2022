import React from 'react';
import Header from '../../components/appBar';
import ComponentDetalhesVenda from '../../components/detalhes_venda'

const DetalhesVenda = ({ navigation }) => {
    return (
        <Header title="Detalhes da Venda" goBack={true} navigation={navigation}>
            <ComponentDetalhesVenda />
        </Header>
    )
}

export default DetalhesVenda;
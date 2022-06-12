import React from 'react';
import AddToCart from '../../components/addToCart';
import Header from '../../components/appBar';

const AdicionarCarrinho = ({ navigation, route }) => {
    return (<Header title="Adicionar ao Carrinho" goBack={true} navigation={navigation} >
        <AddToCart data={route.params} />
    </Header>)
}

export default AdicionarCarrinho;
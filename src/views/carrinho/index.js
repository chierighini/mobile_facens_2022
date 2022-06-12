import React, { useEffect } from 'react';
import Header from '../../components/appBar';
import ListCarrinho from '../../components/listCarrinho';
import Button from '../../components/button'
import { get } from '../../service/service.axios';
import { CARRINHO } from '../../constants/constant.url';

const Carrinho = ({ navigation }) => {
    const itens = [{ id: 1, nome: 'caderno', quantidade: 4 }, { id: 2, nome: 'caderno', quantidade: 4 }]
    //TODO
    useEffect(() => {
        getCarrinho();
    }, []);

    const getCarrinho = async () => {
        try {
            // await get(CARRINHO);
        } catch {
            console.log('algo deu errado')
        }
    }

    return (
        <Header title="Carrinho" goBack={true} navigation={navigation} isLoggedIn={false}>
            {itens ? <ListCarrinho listCarrinho={itens} /> : <h4>Não existem itens em carrinho</h4>}
            <Button variant="contained" onClick={() => navigation.navigate('Estoque')}>Inserir Produtos</Button>
        </Header>
    )
}

export default Carrinho;
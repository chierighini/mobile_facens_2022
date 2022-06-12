import React, { useEffect, useState, useCallback } from 'react';
import ListEstoque from '../../components/listEstoque';
import Header from '../../components/appBar';
import { PRODUCT } from '../../constants/constant.url';
import { get } from '../../service/service.axios';
import Button from '../../components/button';

const Estoque = ({ navigation }) => {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    const getListEstoque = useCallback(async () => {
        try {
            const response = await get(PRODUCT)
            setList(response);
            setLoading(false);
            console.log(response);

        } catch {
            setList([]);
            setLoading(false);
            console.log('algo deu errado')
        }
    }, [list])

    useEffect(() => {
        getListEstoque();
    }, [])

    return (
        <Header title="Estoque" goBack={true} navigation={navigation}>

            {loading && <h4>Carregando</h4>}
            {list?.length > 0 && !loading ?
                <ListEstoque navigation={navigation} listaEstoque={list} /> : <h4>Nenhum produto cadastrado no
                    estoque</h4>
            }

            <Button variant="contained" onClick={() => navigation.navigate('InserirProduto')}>Inserir novo produto</Button>
        </Header >
    )
}

export default Estoque;
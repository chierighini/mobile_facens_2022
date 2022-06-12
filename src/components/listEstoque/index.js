import { Divider } from '@mui/material';
import React from 'react';
import * as S from './styles';

const ListEstoque = ({ navigation, listaEstoque }) => {

    const handleClick = (data) => {
        navigation.navigate('DetalhesProduto', {
            data
        });
    }

    return (
        <>
            <S.Model>
                <strong>Nome</strong>
                <S.CustomDivider orientation="vertical" />
                <strong>Qtd</strong>
                <S.CustomDivider orientation="vertical" />
                <strong>Preço</strong>
            </S.Model>
            {listaEstoque ? (
                listaEstoque.map(({ nome, quantidade, preco, marca, id }, index) => (
                    <S.ListItens key={index} onClick={() => handleClick({ nome, marca, quantidade, preco, id })}>
                        {nome}
                        <S.CustomDivider orientation="vertical" />
                        {quantidade}
                        <S.CustomDivider orientation="vertical" />
                        {preco}
                    </S.ListItens>
                ))
            ) : (<h2>carregando</h2>)

            }
        </>
    )
}

export default ListEstoque;
import { Divider } from '@mui/material';
import React from 'react';
import * as S from './styles';
import DeleteIcon from '@mui/icons-material/Delete';

const ListCarrinho = ({ navigation, listCarrinho }) => {

    const handleClick = (data) => {
        console.log(data)
    }

    return (
        <>
            <S.Model>
                <strong>Nome</strong>
                <S.CustomDivider orientation="vertical" />
                <strong>Qtd</strong>
                <S.CustomDivider orientation="vertical" />
                <strong>Excluir</strong>
            </S.Model>
            {listCarrinho ? (
                listCarrinho.map(({ nome, quantidade, id }, index) => (
                    <S.ListItens key={index} >
                        {nome}
                        <S.CustomDivider orientation="vertical" />
                        {quantidade}
                        <S.CustomDivider orientation="vertical" />
                        <DeleteIcon style={{
                            cursor: 'pointer'
                        }} onClick={() => handleClick({ id })} />
                    </S.ListItens>
                ))
            ) : (<h2>carregando</h2>)

            }
        </>
    )
}

export default ListCarrinho;
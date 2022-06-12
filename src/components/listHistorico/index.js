import React from 'react';
import * as S from './styles';

const ListHistorico = ({ historico, navigation }) => {
    historico = [{ date: '11/06/2022', quantidade: 2 }];
    return (
        <>
            <S.Model>
                <strong>Data venda</strong>
                <S.CustomDivider orientation="vertical" />
                <strong>Qtd de itens</strong>
            </S.Model>
            {historico ? (
                historico.map(({ date, quantidade }, index) => (
                    <S.ListItens key={index} onClick={() => navigation.navigate('DetalhesVenda')}>
                        <strong>{date}</strong>
                        <S.CustomDivider orientation="vertical" />
                        <strong>{quantidade}</strong>
                    </S.ListItens>
                ))
            ) : (<h2>carregando</h2>)

            }
        </>
    )
}

export default ListHistorico;
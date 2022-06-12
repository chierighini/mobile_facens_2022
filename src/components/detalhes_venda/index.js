import * as S from './styles';

const ComponentDetalhesVenda = () => {
    return (
        <>
            <S.Box>
                <p><strong>Data da venda:</strong></p>
                <p>11/06/2022</p>
            </S.Box>
            <S.BoxProd>
                <p>Nome do produto</p> <p>|</p> <p>Qtd</p>
            </S.BoxProd>
            <S.List>
                <p>teste</p> <p>|</p> <p>2</p>
            </S.List>
            <S.List>
                <p>teste2</p><p>|</p> <p>4</p>
            </S.List>
        </>
    )
}

export default ComponentDetalhesVenda;
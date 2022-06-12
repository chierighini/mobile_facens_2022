import React, { useState, useEffect } from 'react';
import ListHistorico from '../../components/listHistorico';
import Header from "../../components/appBar";
import { get } from '../../service/service.axios';
import { HISTORICO_VENDAS } from '../../constants/constant.url';

const HistoricoVendas = ({ navigation }) => {
    const [hasHistorico, setHasHistorico] = useState(null);

    const getListHistorico = async () => {
        try {
            // const response = await get(HISTORICO_VENDAS)
            setHasHistorico(true)
        } catch {
            setHasHistorico(null)
            console.log('algo deu errado')
        }
    }

    useEffect(() => {
        getListHistorico();
    }, [])

    return (
        <Header title="Historico Vendas" goBack={true} navigation={navigation}>
            {hasHistorico ? <ListHistorico navigation={navigation} historico={hasHistorico} /> : <h4>Nenhuma venda foi encontrada</h4>}
        </ Header>
    )
}

export default HistoricoVendas;
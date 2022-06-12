import styled from 'styled-components';
import { Divider } from '@mui/material'

export const Model = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    border-color: black;
    border: 3px solid;
    border-radius: 3px;
    background-color: #c2c2c2;
    margin-bottom: 2% ;
`;

export const CustomDivider = styled(Divider)`
    width: 3px !important;
    border-color: black !important;
`;

export const ListItens = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    border-color: black;
    border: 1px solid;
    border-radius: 3px;
    margin: 2% 0 ;
`;
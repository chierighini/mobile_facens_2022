import React, { useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Button from "../../components/button";
import Header from "../../components/appBar";
import { post } from '../../service/service.axios';
import { PRODUCT_UPDATE, PRODUCT_DELETE } from '../../constants/constant.url';
import CustomDialog from '../../components/dialog';

const DetalhesProduto = ({ route, navigation }) => {
    const [del, setDel] = useState(false);

    const [dialogData, setOpen] = useState({ open: false, message: '' });

    const handleClose = () => {
        setOpen({ open: false, message: '' });
        navigation.navigate('Menu')
    };
    const handleClickOpen = (message) => {
        setOpen({ open: true, message });

    };

    const { data } = route.params;
    const initialValues = {
        nome: data.nome,
        marca: data.marca,
        preco: +data.preco,
        quantidade: +data.quantidade,
    };
    const formRef = useRef(null);
    const [isDisabled, setIsDisabled] = useState(true);

    const schema = Yup.object().shape({
        nome: Yup.string().required("Campo obrigatório"),
        marca: Yup.string().required("Campo obrigatório"),
        preco: Yup.number().required("Campo obrigatório"),
        quantidade: Yup.number().required("Campo obrigatório"),
    });

    const handleSubmit = async (data) => {
        try {
            const objPost = {
                nome: data.nome,
                marca: data.marca,
                preco: data.preco,
                quantidade: data.quantidade,
            }
            await post(PRODUCT_UPDATE, { ...objPost })
            setIsDisabled(true);
            navigation.navigate('Menu')
        } catch {
            setIsDisabled(true);
            console.log('algo deu errado')
        }
    };

    const handleDelete = async () => {
        try {
            const obj = { nome: data.nome };
            await post(PRODUCT_DELETE, { ...obj })
            setDel(true)
            navigation.navigate('Menu')
        } catch {
            setDel(false)
            console.log('algo deu errado')
        }
    }

    const handleCart = () => {
        navigation.navigate('AdicionarCarrinho', {
            data
        });
    }

    useEffect(() => {
        if (del) {
            handleClickOpen('Produto deletado com sucesso')
        }
    }, [del])

    return (
        <Header title="Detalhes Produto" goBack={true} navigation={navigation}>
            {initialValues ? (
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    validationSchema={schema}
                >
                    {({ handleChange, values }) => (
                        <Form ref={formRef}>
                            <Input
                                id="nome"
                                name="nome"
                                type="text"
                                label="Nome"
                                value={values.nome}
                                disabled={isDisabled}
                                onChange={handleChange}

                            />
                            <Input
                                id="marca"
                                name="marca"
                                type="text"
                                label="Marca"
                                disabled={isDisabled}
                                onChange={handleChange}
                                value={values.marca}
                            />
                            <Input
                                id="preco"
                                name="preco"
                                type="number"
                                label="Preço"
                                disabled={isDisabled}
                                onChange={handleChange}
                                value={values.preco}
                            />
                            <Input
                                id="quantidade"
                                name="quantidade"
                                label="Quantidade"
                                onChange={handleChange}
                                disabled={isDisabled}
                                type="number"
                                value={values.quantidade}
                            />
                            <Button variant="contained" onClick={handleCart}>
                                Adicionar ao Carrinho
                            </Button>
                            {isDisabled && (
                                <Button variant="contained" onClick={() => { setIsDisabled(false) }}>
                                    Editar
                                </Button>
                            )}
                            {!isDisabled &&
                                (
                                    <Button variant="contained" type="submit">
                                        Salvar
                                    </Button>
                                )}
                            <Button variant="contained" onClick={handleDelete}>
                                Excluir
                            </Button>
                        </Form>
                    )}
                </Formik>
            ) : (<>{"carregando"}</>)}
            <CustomDialog open={dialogData.open} messagem={dialogData.message} handleClose={handleClose} />
        </Header>
    );
};

export default DetalhesProduto;

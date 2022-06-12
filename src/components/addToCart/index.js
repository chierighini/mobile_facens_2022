import React, { useRef, useState, useEffect } from "react";
import Button from '../button'
import Input from '../input';
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { post } from '../../service/service.axios';
import { CARRINHO } from '../../constants/constant.url';

const AdicionarCarrinho = ({ navigation, data }) => {
    const quantidade = data.data.quantidade;
    const [isDisabled, setIsDisabled] = useState(false);
    const formRef = useRef(null)
    const schema = Yup.object().shape({
        nome: Yup.string().required("Campo obrigatório"),
    });
    const handleSubmit = async (data) => {
        try {
            const obj = {
                nome: data.data.nome,
                marca: data.data.marca,
                preco: data.data.preco,
                quantidade: data.quantidade,
            }
            await post(PRODUCT_UPDATE, { ...obj })

        } catch {
            console.log('algo deu errado')
        }
    }

    return (
        <>{!isDisabled ? (
            <Formik
                initialValues={{ quantidade: 1 }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ handleChange, values, setFieldValue }) => (
                    <Form ref={formRef}>
                        <div style={{ display: 'flex' }}>
                            <Button variant="contained" style={{ width: 'min-content' }}
                                onClick={() => {
                                    +values.quantidade + 1 <= quantidade && setFieldValue('quantidade', +values.quantidade + 1)
                                }}>+</Button>
                            <Input
                                id="quantidade"
                                name="quantidade"
                                type="number"
                                value={values.quantidade}
                                disabled
                                onChange={handleChange}

                            />
                            <Button variant="contained" style={{ width: 'min-content' }}
                                onClick={() => {
                                    +values.quantidade - 1 >= 1 &&
                                        setFieldValue('quantidade', +values.quantidade - 1)
                                }}>-</Button>
                        </div>
                        <Button variant="contained" type="submit">
                            Adicionar ao carrinho
                        </Button>
                    </Form>
                )}
            </Formik>
        ) : (<>{"Loading"}</>)}
        </>

    );
}

export default AdicionarCarrinho;
import React, { useRef, useState } from "react";
import Input from "../../components/Input";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Button from "../../components/button";
import Header from "../../components/appBar";
import { post } from '../../service/service.axios';
import { PRODUCT } from '../../constants/constant.url';
import CustomDialog from '../../components/dialog';

const InserirProduto = ({ navigation }) => {
  const formRef = useRef(null);
  const initialValues = {
    nome: "",
    marca: "",
    preco: 0,
    quantidade: 0,
  }
  const [dialogData, setOpen] = useState({ open: false, message: '' });

  const handleClose = () => {
    setOpen({ open: false, message: '' });
    navigation.goBack();
  };
  const handleClickOpen = (message) => {
    setOpen({ open: true, message });

  };

  const schema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    marca: Yup.string().required("Campo obrigatório"),
    preco: Yup.number().required("Campo obrigatório"),
    quantidade: Yup.number().required("Campo obrigatório"),
  });

  const handleSubmit = async (data) => {
    try {
      const payload = {
        nome: data.nome,
        marca: data.marca,
        preco: data.preco,
        quantidade: data.quantidade,
      }

      await post(PRODUCT, { ...payload })
      handleClickOpen('Novo produto cadastrado com sucesso')
    } catch (err) {
      handleClickOpen("Produto já cadastrado!")
    }
  };

  return (
    <Header title="Inserir Produto" goBack={true} navigation={navigation}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleChange, resetForm }) => (
          <Form ref={formRef}>
            <Input
              id="nome"
              name="nome"
              type="text"
              label="Nome"
              onChange={handleChange}
              required
            />
            <Input
              id="marca"
              name="marca"
              type="text"
              label="Marca"
              onChange={handleChange}
              required
            />
            <Input
              id="preco"
              name="preco"
              type="number"
              label="Preço"
              onChange={handleChange}
              required
            />
            <Input
              id="quantidade"
              name="quantidade"
              label="Quantidade"
              onChange={handleChange}
              type="number"
              required
            />
            <Button variant="contained" type="submit">
              Salvar
            </Button>
          </Form>
        )}
      </Formik>
      <CustomDialog open={dialogData.open} messagem={dialogData.message} handleClose={handleClose} />
    </Header >
  );
};

export default InserirProduto;

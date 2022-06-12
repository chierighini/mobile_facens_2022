import { Formik, Form as FormFormik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import Button from "../../components/button";
import { Input } from "../../components/Input/styles";
import Header from "../../components/appBar";
import { post } from '../../service/service.axios';
import { CADASTRO } from '../../constants/constant.url';
import CustomDialog from '../../components/dialog';

const Signup = ({ navigation }) => {
  const formRef = useRef(null);
  const [dialogData, setOpen] = useState({ open: false, message: '' });

  const handleClose = () => {
    setOpen({ open: false, message: '' });
    navigation.navigate('Menu');
  };
  const handleClickOpen = (message) => {
    setOpen({ open: true, message });
  };

  const schema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    pwd: Yup.string().required("Campo obrigatório"),
    birthday: Yup.string().required("Campo obrigatório"),
    document: Yup.string().required("Campo obrigatório"),
    address: Yup.string().required("Campo obrigatório"),
    houseNumber: Yup.string().required("Campo obrigatório"),
    district: Yup.string().required("Campo obrigatório"),
    city: Yup.string().required("Campo obrigatório"),
    cep: Yup.string().required("Campo obrigatório"),
  });

  const handleSubmit = async (data) => {
    try {
      const payload = {
        email: data.email,
        pwd: data.pwd,
        name: data.name,
        birthday: data.birthday,
        document: data.document,
        address: data.address,
        houseNumber: data.houseNumber,
        district: data.district,
        city: data.city,
        cep: data.cep,
      }

      await post(CADASTRO, { ...payload })
      handleClickOpen('Sucesso !');
    } catch {
      console.log('algo deu errado')
    }

  };

  return (
    <Header title="Cadastro" goBack={true} navigation={navigation} isLoggedIn={false}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          pwd: "",
          phone: "",
          birthday: "",
          document: "",
          address: "",
          houseNumber: "",
          district: "",
          city: "",
          cep: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleChange }) => (
          <FormFormik ref={formRef}>
            <Input id="name" name="name" variant="outlined" label="Nome" onChange={handleChange} type="text" required />
            <Input id="email" name="email" variant="outlined" label="E-mail" onChange={handleChange} type="email" required />
            <Input id="pwd" name="pwd" variant="outlined" label="Senha" onChange={handleChange} type="password" required />
            <Input id="phone" name="phone" variant="outlined" label="Telefone" onChange={handleChange} type="text" required />
            <Input
              id="birthday"
              name="birthday"
              variant="outlined"
              label="Data de nascimento"
              onChange={handleChange}
              type="text"
              required
            />
            <Input id="document" name="document" variant="outlined" label="CPF" onChange={handleChange} type="text" required />
            <Input id="address" name="address" variant="outlined" label="Logradouro" onChange={handleChange} type="text" required />
            <Input id="houseNumber" name="houseNumber" variant="outlined" label="Número" onChange={handleChange} type="text" required />
            <Input id="district" name="district" variant="outlined" label="Bairro" onChange={handleChange} type="text" required />
            <Input id="city" name="city" variant="outlined" label="Cidade" onChange={handleChange} type="text" required />
            <Input id="cep" name="cep" variant="outlined" label="CEP" onChange={handleChange} type="text" required />
            <Button type="submit" variant="contained">
              CADASTRAR
            </Button>
          </FormFormik>
        )}
      </Formik>
      <CustomDialog open={dialogData.open} messagem={dialogData.message} handleClose={handleClose} />
    </Header>
  );
};

export default Signup;

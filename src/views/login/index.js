import React, { useRef, useEffect } from "react";
import Button from "../../components/button";
import Input from "../../components/Input";
import { Divider } from "@mui/material";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Header from "../../components/appBar";
import { CADASTRO } from '../../constants/constant.url'
import { post } from '../../service/service.axios'

const Login = ({ navigation }) => {
  const formRef = useRef(null);
  const schema = Yup.object().shape({
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: Yup.string().required("Campo obrigatório"),
  });

  const handleSubmit = async (data) => {
    try {
      const postObj = {
        email: data.email,
        pwd: data.pwd
      }

      //TODO
      //const list = await post(CADASTRO, { ...postObj });

      setTimeout(() => navigation.navigate('Menu'), 500)

    } catch {
      console.log('algo deu errado')
    }
  }

  const goToLogin = () => {
    setTimeout(() => navigation.navigate('Signup'), 500)
  }

  return (
    <Header title="Login" isLoggedIn={false}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ handleChange }) => (
          <Form ref={formRef}>
            <Input
              id="email"
              name="email"
              variant="outlined"
              label="E-mail"
              type="email"
              onChange={handleChange}
            />
            <Input
              id="pwd"
              name="password"
              variant="outlined"
              label="Senha"
              type="password"
              onChange={handleChange}
            />
            <Button variant="contained" type="submit" >
              LOGIN
            </Button>
            <Divider
              variant="fullWidth"
              style={{
                height: "2px !important",
                width: "100%",
                margin: "2% 0",
              }}
            />
            <Button variant="outlined" onClick={goToLogin}>CRIAR UMA CONTA</Button>
          </Form>
        )}
      </Formik>
    </Header>
  );
};

export default Login;

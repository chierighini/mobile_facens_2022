import React from 'react';
import { ErrorMessage } from './styles';

export default function InputErrorMessage({ children }) {
  return <ErrorMessage errorColor={"#ff0000"}>{children}</ErrorMessage>

}
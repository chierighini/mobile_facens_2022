import React from "react";
import * as S from "./styles";
import InputErrorMessage from '../inputErrorMessage';
import { useField } from 'formik';
import InputMask from 'react-input-mask';

const Input = ({ disabled, mask, formatChars, ...rest }) => {
  const [input, meta] = useField(rest);
  const hasError = !!meta.touched && !!meta.error;

  return (<>
    {rest.name && (
      <>
        <InputMask
          {...input}
          value={rest.value}
          mask={mask}
          maskChar={null}
          onChange={rest.onChange}
          formatChars={formatChars}
          disabled={disabled}
        >{() => (
          <S.Input disabled={disabled} error={hasError} {...rest} />
        )}</InputMask>
        {hasError && (
          <InputErrorMessage>{meta.error.toString()}</InputErrorMessage>
        )}
      </>
    )}
  </>);
};

export default Input;

/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useCallback } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, TInput, TextI, Error } from './styles';

export default function Input({
  name,
  label,
  onChangeText,
  style,
  error,
  clearError,
  ...rest
}) {
  const inputRef = useRef(null);

  const { fieldName, registerField, defaultValue } = useField(name);
  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);
  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' });
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);
  const handleChangeText = useCallback(
    text => {
      if (inputRef.current) inputRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );

  return (
    <>
      <Container style={style}>
        {label && <TextI>{label}</TextI>}
        <TInput
          ref={inputRef}
          onChangeText={handleChangeText}
          defaultValue={defaultValue}
          onFocus={clearError}
          {...rest}
        />
      </Container>
      {error ? <Error>{error}</Error> : null}
    </>
  );
}
Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChangeText: PropTypes.func,
};

Input.defaultProps = {
  label: null,
  onChangeText: null,
};

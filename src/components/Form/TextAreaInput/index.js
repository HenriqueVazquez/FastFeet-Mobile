/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useCallback } from 'react';

import { useField } from '@unform/core';

import PropTypes from 'prop-types';

import { TInput } from './styles';

export default function TextAreaInput({ name, style, onChangeText, ...rest }) {
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
    <TInput
      style={style}
      ref={inputRef}
      onChangeText={handleChangeText}
      multiline
      defaultValue={defaultValue}
      {...rest}
    />
  );
}

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
};

TextAreaInput.defaultProps = {
  onChangeText: null,
};

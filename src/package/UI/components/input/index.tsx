import React from 'react';
import {TextInput} from 'react-native';
import {InputBox, InputLabel, InputError} from './styles';

interface inputProps {
  label: string;
  messageError: string;
}

export const Input: React.FC<inputProps> = ({label, messageError}) => {
  const [value, onChangeText] = React.useState('');

  return (
    <InputBox>
      <InputLabel allowFontScaling>{label}</InputLabel>
      <TextInput
        style={{
          borderBottomColor: '#000000',
          borderBottomWidth: 1,
          fontSize: 20,
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <InputError allowFontScaling>{messageError}</InputError>
    </InputBox>
  );
};

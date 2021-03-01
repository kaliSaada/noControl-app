import * as React from 'react';
import {Box, Header, Middle, Footer} from './styles';
import {Input} from '@ui/components/input';
import {SvgXml} from 'react-native-svg';
import logo from '../../../../assets/icons/logo';

const LoginScreen = () => {
  return (
    <Box>
      <Header>
        <SvgXml xml={logo} width="80%" height="80%" />
      </Header>
      <Middle>
        <Input label="Usuário" messageError="Campo inválido." />
        <Input label="Senha" messageError="Digite uma senha." />
      </Middle>
      <Footer />
    </Box>
  );
};

export default LoginScreen;

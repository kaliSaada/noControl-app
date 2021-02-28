import * as React from 'react';
import {Box, Header, Middle, Footer} from './styles';
import {Input} from '@ui/components/input';

const LoginScreen = () => {
  return (
    <Box>
      <Header />
      <Middle>
        <Input label="Usuário" messageError="Campo inválido." />
        <Input label="Senha" messageError="Digite uma senha." />
      </Middle>
      <Footer />
    </Box>
  );
};

export default LoginScreen;

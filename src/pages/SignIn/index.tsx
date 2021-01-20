import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import logo from '../../assets/barber-logo.svg';

import * as SC from './styles';

const SignIn: React.FC = () => (
    <SC.Container>
        <SC.Content>
            <img src={logo} alt="GoBarber" />
            <form>
                <h1>Faça seu logon</h1>
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <button type="submit">Entrar</button>
                <a href="forgot">Esqueci minha senha</a>
            </form>
            <a href="login">
                <FiLogIn />
                Criar conta
            </a>
        </SC.Content>
        <SC.Background />
    </SC.Container>
);

export default SignIn;

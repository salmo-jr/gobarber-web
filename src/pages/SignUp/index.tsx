import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import logo from '../../assets/barber-logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import * as SC from './styles';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: unknown): Promise<void> => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Informe um e-mail válido'),
                password: Yup.string().min(
                    6,
                    'A Senha deve conter no mínimo 6 caracteres',
                ),
            });
            await schema.validate(data, { abortEarly: false });
        } catch (error) {
            const errors = getValidationErrors(error);
            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
        <SC.Container>
            <SC.Background />
            <SC.Content>
                <img src={logo} alt="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    <Input
                        type="text"
                        name="name"
                        icon={FiUser}
                        placeholder="Nome"
                    />
                    <Input
                        name="email"
                        icon={FiMail}
                        type="text"
                        placeholder="E-mail"
                    />
                    <Input
                        name="password"
                        icon={FiLock}
                        type="password"
                        placeholder="Senha"
                    />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <a href="logon">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </SC.Content>
        </SC.Container>
    );
};

export default SignUp;

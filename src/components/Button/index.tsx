import React, { ButtonHTMLAttributes } from 'react';
import * as SC from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <SC.Container {...rest}>{children}</SC.Container>
);

export default Button;

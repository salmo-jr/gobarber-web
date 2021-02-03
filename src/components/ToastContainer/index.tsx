import React from 'react';
import { useTransition } from 'react-spring';
import * as SC from './styles';
import { ToastMessage } from '../../hooks/toast';
import Toast from './Toast';

interface ToastContainerProps {
    messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
    const messagesWithTransitions = useTransition(
        messages,
        message => message.id,
        {
            from: { right: '-120%', opacity: 0 },
            enter: { right: '0%', opacity: 1 },
            leave: { right: '-120%', opacity: 0 },
        },
    );
    return (
        <SC.Container>
            {messagesWithTransitions.map(({ item, key, props }) => {
                return <Toast key={key} style={props} message={item} />;
            })}
        </SC.Container>
    );
};

export default ToastContainer;

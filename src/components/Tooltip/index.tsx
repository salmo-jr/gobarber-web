import React from 'react';

import * as SC from './styles';

interface TooltipProps {
    title: string;
    className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
    return (
        <SC.Container className={className}>
            <span>{title}</span>
            {children}
        </SC.Container>
    );
};

export default Tooltip;

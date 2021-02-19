import React from 'react';

import { Container } from './styles';

interface TootlipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TootlipProps> = ({ title, className, children }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;

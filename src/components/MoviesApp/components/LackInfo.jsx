import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-size: 1.1rem;
`;

export const LackInfo = ({ children }) => {
  return <Text>{children}</Text>;
};

import React from 'react';
import styled from 'styled-components';

const StyledInnerNamingBlock = styled.div`
  border: 1px solid black;
  width: 48%;
  height: 100px;
`;

function InnerNamingBlock({ children }) {
  return <StyledInnerNamingBlock>{children}</StyledInnerNamingBlock>;
}

export default InnerNamingBlock;
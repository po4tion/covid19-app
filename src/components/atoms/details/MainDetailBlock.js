import React from 'react';
import styled from 'styled-components';

const StyledMainDetailBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  border: 1px solid black;
`;

function MainDetailBlock({ children }) {
  return <StyledMainDetailBlock>{children}</StyledMainDetailBlock>;
}

export default MainDetailBlock;
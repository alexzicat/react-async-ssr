import React from 'react';
import styled from 'styled-components';

const Page = ({className, title}) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
    </div>
  );
};

const StyledPage = styled(Page)`
  color: limegreen;
  font-size: 20px;
  text-align: center;
`;

export default StyledPage;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 14px;
  line-height: 22px;
  marginBottom: 7px;
  color: rgba(0,0,0,0.65);
  .title {
    margin-right: 8px;
    display: inline-block;
    color: rgba(0,0,0,0.85);
  }
`;

const DescriptionItem = ({ title, content }) => (
  <Container>
    <p className="title">{title}:</p>
    {content}
  </Container>
);

export default DescriptionItem;

import styled from 'styled-components';

const MenuPrice = styled.div`
  border-left: 1px solid #ccc;
  height: 100%;
  padding: 20px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 480px) {
    border-left: none;
    padding: 20px 0 20px 0;
    border-bottom: 1px solid #ccc;
    min-width: 300px;
    margin: 0;
  }
`;

const ItemTitle = styled.span`
  color: #096dd9;
  font-weight: bold;
  cursor: pointer;
`;

export { MenuPrice, ItemTitle };

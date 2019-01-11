import styled from 'styled-components';

const Content = styled.div`
  margin: 3% 10% 3% 10%;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 15px;
    margin-right: 15px;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Tabs = styled.div`
  .tabs {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export { Content, Tabs };

import styled from 'styled-components';
import { Drawer } from 'antd';

const StyledDrawer = styled(Drawer)`
  overflow: auto;
  height: calc(100% - 108px);
  padding-bottom: 108px;
  .ant-drawer-content-wrapper {
    width: 720px !important;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    .ant-drawer-content-wrapper {
      width: 480px !important;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .ant-drawer-content-wrapper {
      width: 320px !important;
    }
  }
`;

const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #e9e9e9;
  padding: 10px 16px;
  background: #fff;
  text-align: right;
`;

export { StyledDrawer, Footer };

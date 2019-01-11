import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const AntdHeader = Layout.Header;

const Logo = styled.h3`
  float: left;
  display: inline-block;
  color: white;
  margin-bottom: 0;
`;

const StyledHeader = styled(AntdHeader)`
  .ant-layout-header {
    position: 'fixed';
    z-index: 1;
    width: 100%;
  }
`;

const StyledMenu = styled(Menu)`
  line-height: 64px;
  float: right;
`;

export { Logo, StyledHeader, StyledMenu };

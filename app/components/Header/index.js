import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';

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

function Header() {
  return (
    <StyledHeader>
      <Logo>Logo</Logo>
      <StyledMenu theme="dark" mode="horizontal">
        <Menu.Item key="1">Register</Menu.Item>
        <Menu.Item key="2">Sign In</Menu.Item>
      </StyledMenu>
    </StyledHeader>
  );
}

Header.propTypes = {};

export default Header;

import React from 'react';
import { Menu } from 'antd';
import { Logo, StyledHeader, StyledMenu } from './styles';

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

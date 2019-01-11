import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { StyledDrawer, Footer } from './styles';

function DrawerModal({ title, children, onClose, showDetail }) {
  return (
    <StyledDrawer title={title} onClose={onClose} visible={showDetail}>
      {children}
      <Footer>
        <Button onClick={onClose} style={{ marginRight: 8 }}>
          Cancel
        </Button>
      </Footer>
    </StyledDrawer>
  );
}

DrawerModal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  showDetail: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
};

export default DrawerModal;

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import { StyledDrawer, Footer } from './styles';

function DrawerModal({ children, onClose, showDetail }) {
  return (
    <StyledDrawer
      title="Menu 1 Detail"
      width={720}
      onClose={onClose}
      visible={showDetail}
    >
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
  ]).isRequired,
  showDetail: PropTypes.bool,
  onClose: PropTypes.func,
};

export default DrawerModal;

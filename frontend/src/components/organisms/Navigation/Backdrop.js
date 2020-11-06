import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  top: 0;
  left: 0;
`;

const Backdrop = ({ click }) => <StyledBackdrop onClick={click} />;

Backdrop.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Backdrop;

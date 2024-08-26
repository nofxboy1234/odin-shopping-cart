import PropTypes from 'prop-types';
import styled from 'styled-components';

const FancyButton = styled.button`
  background: ${(props) => (props.$primary ? '#bf4f74' : 'white')};
  color: ${(props) => (props.$primary ? 'white' : '#bf4f74')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

FancyButton.propTypes = {
  $primary: PropTypes.bool,
};

export default FancyButton;

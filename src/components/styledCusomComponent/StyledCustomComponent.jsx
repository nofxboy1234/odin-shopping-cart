import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomLink = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledCustomLink = styled(CustomLink)`
  color: #bf4f74;
  font-weight: bold;
`;

CustomLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default StyledCustomLink;
export { CustomLink };

import PropTypes from 'prop-types';
import styled from 'styled-components';

const CustomLink = ({ className, children, href }) => (
  <a className={className} href={href}>
    {children}
  </a>
);

const StyledCustomLink = styled(CustomLink)`
  color: #bf4f74;
  font-weight: bold;
`;

CustomLink.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  href: PropTypes.string,
};

export default StyledCustomLink;
export { CustomLink };

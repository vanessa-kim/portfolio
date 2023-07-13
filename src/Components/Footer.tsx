import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  padding: 30px;
  font-size: 12px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>© 2023 Vanessa Kim. All rights reserved.</p>
      <address>Contact me for more information. yeran1225@gmail.com</address>
    </FooterWrapper>
  );
}

export default Footer;

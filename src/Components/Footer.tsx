import styled from "styled-components";

const FooterWrapper = styled.footer`
	border-top: 1px solid #ddd;
	padding: 10px 30px;
	font-size: 12px;
	text-align: center;

	p {
		margin: 0;
		font-size: 12px;
	}
`;

function Footer() {
	return (
		<FooterWrapper>
			<p>© 2024 VANESSA STUDIO.</p>
		</FooterWrapper>
	);
}

export default Footer;

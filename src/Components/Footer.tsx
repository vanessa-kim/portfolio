import styled from "styled-components";

const FooterWrapper = styled.footer`
	height: 42px;
	border-top: 1px solid var(--border);
	padding: 10px 30px;
	font-size: 12px;
	text-align: center;

	p {
		margin: 0;
		font-size: 12px;
		font-weight: 300;
		font-family: "Kumbh Sans", sans-serif;
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

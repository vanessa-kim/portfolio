import styled from "styled-components";

export const MainSection = styled.section`
	position: relative;
	padding: 30px;
	background-color: var(--section-bg);
	border-radius: 10px;
	z-index: var(--z-index-main-section);

	.ico-btn {
		position: absolute;
		top: 30px;
		right: 30px;
	}
`;

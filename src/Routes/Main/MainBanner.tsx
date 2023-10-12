import styled from "styled-components";

const MainBannerWrapper = styled.section`
	height: 40vh;
	padding: 30px;
`;

function MainBanner() {
	return (
		<MainBannerWrapper>
			<h2>Main</h2>
			<h3 className="main-text">
				Welcome to My playground
				<br />
				I'm Vanessa Kim!
			</h3>
			<p className="title-description">
				저는 UI/UX 디자이너, 퍼블리셔, 웹 프론트엔드 개발자인 바네사입니다.
			</p>
		</MainBannerWrapper>
	);
}

export default MainBanner;

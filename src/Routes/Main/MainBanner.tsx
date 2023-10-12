import styled from "styled-components";

const MainBannerWrapper = styled.section`
	min-height: 36vh;
	padding: 30px;
	margin: 30px 30px 15px;
	border-radius: 10px;
	background-color: #f1f1f1;

	h3 {
		font-size: 81px;
		font-weight: 400;
	}
`;

function MainBanner() {
	return (
		<MainBannerWrapper>
			<h2>Professional, Passionable, Potential</h2>
			<h3 className="main-text">
				Explore the capability <br />
				of VANESSA STUDIO
			</h3>
			<p className="title-description">
				It's about creating something creative than other things. I create UI to
				inspire you.
			</p>
		</MainBannerWrapper>
	);
}

export default MainBanner;

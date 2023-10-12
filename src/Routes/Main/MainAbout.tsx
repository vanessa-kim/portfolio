import styled from "styled-components";
import CallMadeIcon from "@mui/icons-material/CallMade";

const MainAboutWrapper = styled.section`
	position: relative;
	padding: 30px;
	background-color: #f1f1f1;
	border-radius: 10px;

	.ico-btn {
		position: absolute;
		top: 30px;
		right: 30px;
	}
`;

function MainAbout() {
	return (
		<MainAboutWrapper>
			<h2>ABOUT</h2>
			<h3>UI Creator Vanessa Kim</h3>
			<p>
				저는 UI/UX 디자인, 퍼블리싱, 웹 프론트엔드 개발을 하는 바네사입니다.
				저의 경험이 당신의 웹사이트와 웹 어플리케이션을 한단계 더 높은 단계로
				끌어올릴 수 있도록 최선을 다할 것입니다. <br />
			</p>
			<button className="ico-btn">
				<CallMadeIcon />
			</button>
		</MainAboutWrapper>
	);
}

export default MainAbout;

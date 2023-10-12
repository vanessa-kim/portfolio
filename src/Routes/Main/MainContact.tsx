import styled from "styled-components";
import CallMadeIcon from "@mui/icons-material/CallMade";

const MainContactWrapper = styled.section`
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

function MainContact() {
	return (
		<MainContactWrapper>
			<h2 className="main-text">CONTACT</h2>
			<h3 className="main-text">Got a problem to solve?</h3>
			<p className="title-description">
				궁금한 점, 이야기 나눌 점이 있다면 편하게 문의 주세요. 답은 다소 느릴 수
				있습니다 양해 부탁드립니다.
				<br />
				따로 문의 메일을 보내고 싶다면{" "}
				<a href="mailto:yeran1225@gmail.com">yeran1225@gmail.com</a>으로
				보내주세요.
			</p>

			<button className="ico-btn">
				<CallMadeIcon />
			</button>
		</MainContactWrapper>
	);
}

export default MainContact;

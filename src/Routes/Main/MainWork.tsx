import styled from "styled-components";
import CallMadeIcon from "@mui/icons-material/CallMade";

const MainWorkWrapper = styled.section`
	position: relative;
	padding: 30px;
	background-color: #f1f1f1;
	border-radius: 10px;

	.ico-btn {
		position: absolute;
		top: 30px;
		right: 30px;
	}

	.main-work-pic {
		height: calc(100% - 129px);
		background-color: #ddd;
		border-radius: 10px;
		font-size: 0;
		margin-top: 30px;
	}
`;

function MainWork() {
	return (
		<MainWorkWrapper>
			<h2 className="main-text">WORK</h2>
			<h3 className="main-text">Dive into my playground</h3>
			<p className="title-description">
				2015부터 지금까지 지속된 작업물을 살펴보세요! 더 많은 작업물을 보고
				싶다면 !
			</p>
			<div className="main-work-pic">photo</div>
			<button className="ico-btn">
				<CallMadeIcon />
			</button>
		</MainWorkWrapper>
	);
}

export default MainWork;

import styled from "styled-components";

const MainWorkWrapper = styled.section`
	border-top: 1px solid #ddd;
	padding: 30px;
`;

function MainWork() {
	return (
		<MainWorkWrapper>
			<h2 className="main-text">Work</h2>
			<h3 className="main-text">Dive into my playground</h3>
			<p className="title-description">
				2015부터 지금까지 지속된 작업물을 살펴보세요! 더 많은 작업물을 보고
				싶다면 !
			</p>
			<button>더보기 {`>`}</button>
		</MainWorkWrapper>
	);
}

export default MainWork;

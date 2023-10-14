import styled from "styled-components";

const ExperienceList = styled.ul`
	position: relative;
	padding-left: 30px;
	max-width: 1000px;

	&:after {
		position: absolute;
		bottom: 0;
		left: 218px;
		content: "";
		display: block;
		width: 12px;
		height: 12px;
		background-color: var(--black);
		border-radius: 30px;
		border: 8px solid var(--white);
	}

	li {
		position: relative;
		padding-left: 50px;
		padding-bottom: 80px;
		margin-left: 200px;
		border-left: 4px solid var(--black);

		&:last-child {
			padding-bottom: 50px;
		}
		&:before {
			position: absolute;
			left: -16px;
			content: "";
			display: block;
			width: 12px;
			height: 12px;
			background-color: var(--black);
			border-radius: 30px;
			border: 8px solid var(--white);
		}

		& > b {
			position: absolute;
			left: -230px;
			font-size: 30px;
			font-weight: 300;
			display: flex;
			align-items: center;
		}

		strong {
			display: block;
			font-size: 18px;
			font-weight: 700;
			line-height: 28px;
			color: var(--black);
			margin-bottom: 30px;
		}

		.chip {
			padding: 0 14px 2px;
			font-size: 12px;
			background: var(--black);
			color: var(--white);
			border-radius: 20px;
			line-height: 24px;
			margin-top: 4px;
			margin-left: 10px;
		}
	}
`;

const ProjectItem = styled.div`
	position: relative;
	padding-left: 30px;
	padding-right: 30px;
	border-left: 2px dotted var(--border);
	padding-bottom: 60px;
	margin-bottom: 2px;

	&:last-child {
		padding-bottom: 0;
		margin-bottom: 0;
	}

	.project-row {
		display: grid;
		grid-template-columns: 1fr auto auto;
		margin-bottom: 20px;
		gap: 40px;
	}
	i {
		display: block;
		font-size: 12px;
		font-weight: 700;
		line-height: 18px;
		color: var(--text-sub);
	}
	b {
		font-size: 14px;
		font-weight: 700;
	}
	span {
		font-size: 14px;
	}
	p {
		text-align: justify;
	}
`;

function Experience() {
	return (
		<ExperienceList>
			<li>
				<b>
					2019 - <span className="chip">NOW</span>
				</b>
				<strong>KT NexR</strong>
				<ProjectItem>
					<div className="project-row">
						<div className="project-column">
							<i>서비스 포탈</i>
							<b>NexR Data Cloud (NDC)</b>
						</div>
						<div className="project-column">
							<i>역할</i>
							<span>프론트엔드 개발</span>
						</div>
						<div className="project-column">
							<i>개발 기간</i>
							<span>2023.1 - 진행중</span>
						</div>
					</div>
					<p>
						NexR Data Cloud(NDC)는 사용자가 클라우드 환경에서 데이터를 활용할 수
						있도록 편의성을 제공하는 통합 데이터 서비스입니다. 데이터의 수집,
						저장, 처리, 조회, 분석, 학습, 전달, 시각화 등 전 영역에 대한 모듈과
						통합된 인증(SS), 모듈별 권한 관리를 제공합니다.
					</p>
				</ProjectItem>
				<ProjectItem>
					<div className="project-row">
						<div className="project-column">
							<i>빅데이터 익명화 솔루션</i>
							<b>NexR Anonimyzation (NEA)</b>
						</div>
						<div className="project-column">
							<i>역할</i>
							<span>프론트엔드 개발</span>
						</div>
						<div className="project-column">
							<i>개발 기간</i>
							<span>2023.1 - 진행중</span>
						</div>
					</div>
					<p>
						NexR Data Cloud(NDC)는 사용자가 클라우드 환경에서 데이터를 활용할 수
						있도록 편의성을 제공하는 통합 데이터 서비스입니다. 데이터의 수집,
						저장, 처리, 조회, 분석, 학습, 전달, 시각화 등 전 영역에 대한 모듈과
						통합된 인증(SS), 모듈별 권한 관리를 제공합니다.
					</p>
				</ProjectItem>
			</li>
			<li>
				<b>2015 - 2019</b>
				<strong>Soltworks</strong>
				<ProjectItem>
					<div className="project-row">
						<div className="project-column">
							<i>하이브리드 모바일 애플리케이션</i>
							<b>안전보건 앱</b>
						</div>
						<div className="project-column">
							<i>역할</i>
							<span>디자인, 퍼블리싱</span>
						</div>
						<div className="project-column">
							<i>개발 기간</i>
							<span>2016.8 - 2016.11</span>
						</div>
					</div>
					<p>
						사업장 안전관리를 위해 다양한 산업안전 보건자료를 쉽고 편리하게
						이용할 수 있는 하이브리드앱 입니다.
					</p>
				</ProjectItem>
			</li>
		</ExperienceList>
	);
}

export default Experience;

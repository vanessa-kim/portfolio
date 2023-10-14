import styled from "styled-components";
import Experience from "./Experience";

const SkillList = styled.ul`
	display: flex;
	margin-bottom: 10px;
	gap: 30px;

	li {
		font-weight: 400;
		font-size: 13px;
		text-align: center;
		line-height: 24px;

		& > div {
			width: 60px;
			height: 60px;
			background: var(--black-10);
			border-radius: 5px;
		}
	}
`;

const AboutWrapper = styled.div`
	padding: 30px;

	.skill-row {
		display: inline-grid;
		grid-template-columns: 270px auto;
	}
	.skill-column {
		&:nth-child(1) {
			grid-column: 1 / span 2;
		}
	}
`;

const SectionWrap = styled.section`
	border-bottom: 1px solid var(--border);
	padding-bottom: 60px;
	margin-bottom: 60px;

	&:last-child {
		border-bottom: 0;
		margin-bottom: 0;
	}
`;

const EducationList = styled.ul``;

function About() {
	return (
		<AboutWrapper>
			<h2>ABOUT</h2>

			<SectionWrap>
				<h3>Introduce</h3>
				<p>
					안녕하세요 저는 김예란(Vanessa Kim)입니다. 한국의 서울에 살고 있는
					열정적인 UI 개발자입니다.
					<br />
					<br />웹 디자인/퍼블리싱 3년, 프론트엔드 4년의 경력을 갖고 있습니다.
					솔루션 개발 기업에서 UI 디자인과 퍼블리싱 업무를 담당했었고, 현재는
					빅데이터 전문 플랫폼 개발 기업에서 프론트엔드 업무를 담당하며 자체
					솔루션을 개발중입니다. HTML5, CSS3로 웹표준을 준수한 마크업이
					가능합니다. <br />
					크로스브라우징, 반응형 웹, 웹 접근성을 적용한 웹 개발을 진행했습니다.
					<br />
					Vue.js를 사용해서 프로젝트 개발을 2년간 진행하였고, 현재는 React.js로
					프론트엔드 개발을 하고 있습니다.
					<br />
					<br />
					디자인부터 시작하여, 퍼블리싱 단계를 거쳐 꾸준한 공부와 실전 경험을
					통해서 프론트엔드 개발자가 되었습니다. 풍부한 웹개발 경험을 바탕으로,
					UI의 폭 넓은 이해를 갖고 있습니다. 제가 가진 시각과 값진 경험은 저만이
					가진 특별한 강점이라고 생각합니다. 저의 능력을 발휘할 수 있는 기회를
					감사히 여기며 일하고 있습니다.
					<br />
					저는 커뮤니케이션을 중요시 여겨서 함께 일하는 사람과의 의사소통을
					하려고 노력합니다. 상대방이 말하고 싶은 바를 먼저 귀기울이고 좋은
					관계가 될 수 있도록 노력합니다. 함께 일하는 동료가 된다면 서로 믿을 수
					있는 신뢰 관계를 구축하고 싶습니다.
				</p>
			</SectionWrap>

			<SectionWrap>
				<h3>Skill Stack</h3>
				<div className="skill-row">
					<div className="skill-column">
						<h4>FrontEnd Stack</h4>
						<SkillList>
							<li>
								<div></div>Javascript
							</li>
							<li>
								<div></div>TypeScript
							</li>
							<li>
								<div></div>React.js
							</li>
							<li>
								<div></div>Vue.js
							</li>
							<li>
								<div></div>Next.js
							</li>
							<li>
								<div></div>Redux
							</li>
							<li>
								<div></div>Vuex
							</li>
						</SkillList>
					</div>

					<div className="skill-column">
						<h4>Remote Repository</h4>
						<SkillList>
							<li>
								<div></div>Github
							</li>
							<li>
								<div></div>GitLab
							</li>
						</SkillList>
					</div>

					<div className="skill-column">
						<h4>Design</h4>
						<SkillList>
							<li>
								<div></div>Photoshop
							</li>
							<li>
								<div></div>Illustration
							</li>
							<li>
								<div></div>Figma
							</li>
						</SkillList>
					</div>
				</div>
			</SectionWrap>

			<SectionWrap>
				<h3>Experience</h3>
				<Experience />
			</SectionWrap>

			<SectionWrap>
				<h3>Education</h3>
				<EducationList>
					<li>
						TIS정보기술교육센터 HTML5와 JavaScript를 활용한 웹프론트엔드 개발
						실무 과정
					</li>
					<li>
						패스트캠퍼스 JavaScript 부트 캠프 9기 JavaScript ES6 문법과
						프로그래밍
					</li>
					<li>이화여자대학교 시각디자인 학부 졸업</li>
					<li>덕원예술고등학교 미술과 졸업</li>
				</EducationList>
			</SectionWrap>
		</AboutWrapper>
	);
}

export default About;

import styled from "styled-components";

const SkillWrap = styled.div`
	max-width: 1000px;
	width: 100%;

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
			background: var(--section-bg);
			border-radius: 5px;
		}
	}
`;

function SkillStack() {
	return (
		<SkillWrap>
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
		</SkillWrap>
	);
}

export default SkillStack;

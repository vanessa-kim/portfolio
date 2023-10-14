import styled from "styled-components";
import Experience from "./Experience";
import Education from "./Education";
import SkillStack from "./SkillStack";
import Introduce from "./Introduce";

const AboutWrapper = styled.div`
	width: 100%;
	padding: 30px;
`;

const SectionWrap = styled.section`
	display: grid;
	grid-template-columns: 20% 1fr;
	justify-items: center;
	border-bottom: 1px solid var(--border);
	padding-bottom: 60px;
	margin-bottom: 60px;

	&:last-child {
		border-bottom: 0;
		margin-bottom: 0;
	}

	h3 {
		min-width: 200px;
	}
`;

function About() {
	return (
		<AboutWrapper>
			<SectionWrap>
				<h3>Introduce</h3>
				<Introduce />
			</SectionWrap>
			<SectionWrap>
				<h3>Skill Stack</h3>
				<SkillStack />
			</SectionWrap>
			<SectionWrap>
				<h3>Experience</h3>
				<Experience />
			</SectionWrap>
			<SectionWrap>
				<h3>Education</h3>
				<Education />
			</SectionWrap>
		</AboutWrapper>
	);
}

export default About;
